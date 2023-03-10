<script lang="ts">
  import store, {
    leaveCanvas,
    deleteCanvas,
    expandCanvas,
    makePublic,
    setNotification,
    updateImageURL
  } from '../store';

  import { PutObjectCommand } from '@aws-sdk/client-s3';
  import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
  import { Buffer } from 'buffer';
  import copy from 'clipboard-copy';
  import {
    ContextMenu,
    ContextMenuOption,
    ContextMenuDivider,
    ContextMenuGroup
  } from 'carbon-components-svelte';
  import Copy from 'carbon-icons-svelte/lib/CopyFile16';
  import Trash from 'carbon-icons-svelte/lib/TrashCan16';
  import Leave from 'carbon-icons-svelte/lib/Unlink16';
  import Share from 'carbon-icons-svelte/lib/Share16';
  import Public from 'carbon-icons-svelte/lib/Unlocked16';

  import exportSvg from '../lib/exportCanvas';
  import {
    dateToDa,
    downloadFile,
    generateDataUrl,
    renderSvgToPng
  } from '../lib/utils';

  export let name: string;
  export let fileURL: string;
  export let location: string;
  export let showMesh: boolean;
  export let privateCanvas: boolean;
  export let canvasNode;

  let menu = false;

  function hasS3(s3) {
    return (
      s3.credentials &&
      s3.credentials.endpoint !== '' &&
      s3.credentials.secretAccessKey !== '' &&
      s3.credentials.AccessKeyId !== '' &&
      s3.configuration.currentBucket !== ''
    );
  }

  function leave(location: string, name: string) {
    $store.api.leave(location, name).then(() => {
      console.log('[ success leave canvas... ]', location, name);
      leaveCanvas(location, name);
    });
  }

  function deletePrivateCanvas(location: string, name: string) {
    $store.api.deletePrivate(location, name).then(() => {
      console.log('[ success deleting canvas... ]', location, name);
      deleteCanvas(location, name);
    });
  }

  //  TODO: expose to the UI
  // function expandRows(extraRows: number) {
  //   const height = $store.canvas[`~${location}/${name}]`].metadata.height;
  //   const rows = Math.ceil((height + 10) / (10 * 1.5) + 1);
  //   const newHeight =
  //     (rows + extraRows - 1) * ($store.radius * 1.5) - $store.radius;
  //   $store.api.expand(location, name, newHeight).then(() => {
  //     console.log('[ success expanding canvas... ]', location, name);
  //     expandCanvas(location, name, newHeight);
  //   });
  // }

  function unlock(name: string) {
    $store.api.makePublic(name).then(() => {
      console.log('[ success unlocking canvas... ]', name);
      makePublic(name);
    });
  }

  function canUploadFilesToStorage() {
    return $store.gcp || hasS3($store.s3);
  }

  async function uploadFileToStorage(data, fileName: string, mimetype: string) {
    if (!$store.s3.client) {
      throw new Error('Storage not ready');
    }

    const body = mimetype !== 'image/png' ? data : Buffer.from(data, 'base64');
    const bucket = $store.s3.configuration.currentBucket;
    const params = new PutObjectCommand({
      Bucket: bucket,
      Key: fileName,
      Body: body,
      ACL: 'public-read',
      ContentType: mimetype
    });

    const { $metadata } = await $store.s3.client.send(params);
    if ($metadata.httpStatusCode === 200) {
      const signedUrl = await getSignedUrl($store.s3.client, params);
      fileURL = signedUrl.split('?')[0];
      $store.api.save(location, name, fileURL).then(() => {
        console.log('[image file saved]', signedUrl);
        copy(fileURL);
        console.log('[copied]', fileURL);
        updateImageURL(location, name, fileURL);
        setNotification({
          text: 'Canvas SVG exported successfully (URL copied to clipboard)',
          type: 'info'
        });
      });
    } else {
      throw new Error(
        `Failed to upload to s3. Request failed with this status code: ${$metadata.httpStatusCode}`
      );
    }
  }

  // Export the canvas as an SVG or PNG
  async function exportCanvas(fileExtension: string) {
    const svgData = exportSvg(canvasNode);
    let data, dataUrl, mimetype;

    switch (fileExtension) {
      case 'svg':
        data = svgData;
        dataUrl = generateDataUrl(svgData, 'image/svg+xml');
        mimetype = 'image/svg+xml';
        break;
      case 'png':
        ({ data, dataUrl } = await renderSvgToPng(svgData));
        mimetype = 'image/png';
        break;
      default:
        throw new Error(`Unknown file extension: ${fileExtension}`);
    }
    const timestamp = dateToDa(new Date());
    const fileName = `${window.ship}/${timestamp}-${name}.${fileExtension}`;
    if (canUploadFilesToStorage()) {
      try {
        await uploadFileToStorage(data, fileName, mimetype);
        return;
      } catch (e) {
        console.error(
          `Encountered error uploading to s3: ${e.message}\nDownloading svg file`,
          e
        );
      }
    }
    downloadFile(dataUrl, fileName);
  }
</script>

<ContextMenu open={menu}>
  <ContextMenuOption
    labelText="Copy Canvas path..."
    icon={Share}
    indented
    on:click={() => {
      setNotification({
        text: 'Canvas path copied to clipboard',
        type: 'info'
      });
      copy(`${location}/${name}`);
    }} />
  {#if location !== `~${$store.ship}`}
    <ContextMenuOption
      labelText="Leave Canvas..."
      icon={Leave}
      indented
      on:click={() => {
        setNotification({
          text: 'Unsubscribing from host...',
          type: 'info'
        });
        leave(location, name);
      }} />
  {/if}
  <!-- {#if privateCanvas}
    <ContextMenuOption
      labelText="Make Public"
      icon={Public}
      indented
      on:click={() => unlock(name)} />
  {/if} -->
  {#if fileURL}
    <ContextMenuOption
      icon={Copy}
      indented
      labelText="Copy Image URL..."
      on:click={() => {
        setNotification({
          text: 'image URL copied to clipboard',
          type: 'info'
        });
        copy(fileURL);
      }} />
  {/if}
  <ContextMenuOption
    indented
    labelText="Export canvas as SVG"
    on:click={() => exportCanvas('svg')} />
  <ContextMenuOption
    indented
    labelText="Export canvas as PNG"
    on:click={() => exportCanvas('png')} />
  <ContextMenuDivider />
  <ContextMenuGroup>
    <ContextMenuOption
      labelText="Show mesh"
      selected={showMesh}
      on:click={() => (showMesh = !showMesh)} />
  </ContextMenuGroup>
  {#if privateCanvas && name !== 'welcome'}
    <ContextMenuDivider />
    <ContextMenuOption
      icon={Trash}
      indented
      labelText="Delete"
      on:click={() => {
        setNotification({ text: 'Deleting private canvas...', type: 'info' });
        deletePrivateCanvas(location, name);
      }} />
  {/if}
</ContextMenu>
