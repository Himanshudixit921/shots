import domtoimage from "dom-to-image";

export const handleDownload = (
  size,
  format,
  transparentBackground,
  containerWidth,
  frameScale,
  activeAspectRatio
) => {
  const downloadContainer = document.getElementById("download_container");
  if (downloadContainer) {
    let targetWidth = 1920;
    const ratio = activeAspectRatio.width / activeAspectRatio.height;
    if (ratio < 1) {
      targetWidth = 1080;
    }
    if (size === "1x") {
      targetWidth = 1 * targetWidth;
    } else if (size === "2x") {
      targetWidth = 2 * targetWidth;
    } else if (size === "4x") {
      targetWidth = 4 * targetWidth;
    }
    const targetHeight = targetWidth / ratio;
    let cloneContainer = downloadContainer.cloneNode(true);
    let actualContainerWidth = ratio * containerWidth;
    cloneContainer.style.width = `${actualContainerWidth}px`;
    cloneContainer.style.aspectRatio = `${ratio}`;
    const scalingFactorX = targetWidth / actualContainerWidth;
    const scalingFactorY = targetHeight / containerWidth;
    cloneContainer.style.transform = `scale(${scalingFactorX}, ${scalingFactorY})`;
    cloneContainer.style.transformOrigin = "top left";
    const offscreenContainer = document.createElement("div");
    offscreenContainer.style.position = "absolute";
    offscreenContainer.style.left = "-9999px";
    offscreenContainer.style.top = "-9999px";
    offscreenContainer.style.opacity = "0";
    offscreenContainer.appendChild(cloneContainer);
    document.body.appendChild(offscreenContainer);

    const options = {
      height: targetHeight,
      width: targetWidth,
      quality: 1,
      ...(transparentBackground ? { bgcolor: null } : {}),
    };

    if (format === "JPEG") {
      domtoimage
        .toJpeg(cloneContainer, options)
        .then((dataUrl) => {
          const link = document.createElement("a");
          link.download = `canvas.jpeg`;
          link.href = dataUrl;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          document.body.removeChild(offscreenContainer);
        })
        .catch((error) => {
          console.error("Error while downloading canvas: ", error);
          document.body.removeChild(offscreenContainer);
        });
      return;
    }

    domtoimage
      .toPng(cloneContainer, options)
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = `canvas.png`;
        link.href = dataUrl;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        document.body.removeChild(offscreenContainer);
      })
      .catch((error) => {
        console.error("Error while downloading canvas: ", error);
        document.body.removeChild(offscreenContainer);
      });
  }
};
