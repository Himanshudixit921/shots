import domtoimage from "dom-to-image";

export const handleDownload = (
  size,
  format,
  transparentBackground,
  containerWidth,
  frameScale
) => {
  const downloadContainer = document.getElementById("download_container");

  if (downloadContainer) {
    let targetWidth = 1920;
    if (size === "1x") {
      targetWidth = 1920;
    } else if (size === "2x") {
      targetWidth = 2048;
    } else if (size === "4x") {
      targetWidth = 4096;
    }

    let cloneContainer = downloadContainer.cloneNode(true);
    cloneContainer.style.width = `${containerWidth}px`;
    cloneContainer.style.height = `${containerWidth}px`;
    const scalingFactor = targetWidth / containerWidth;
    cloneContainer.style.transform = `scale(${scalingFactor})`;
    cloneContainer.style.transformOrigin = "top left";

    const offscreenContainer = document.createElement("div");
    offscreenContainer.style.position = "absolute";
    offscreenContainer.style.left = "-9999px";
    offscreenContainer.style.top = "-9999px";
    offscreenContainer.style.opacity = "0";
    offscreenContainer.appendChild(cloneContainer);
    document.body.appendChild(offscreenContainer);

    const options = {
      height: targetWidth,
      width: targetWidth,
      quality: 1,
      ...(transparentBackground ? { bgcolor: null } : {}),
    };

    let extension = "png";
    if (format === "JPEG") {
      domtoimage
        .toJpeg(cloneContainer, { quality: 1 })
        .then(function (dataUrl) {
          const link = document.createElement("a");
          link.download = `canvas.jpeg`;
          link.href = dataUrl;
          link.click();
          document.body.removeChild(offscreenContainer);
        })
        .catch(function (error) {
          console.error("Error while downloading canvas: ", error);
          document.body.removeChild(offscreenContainer);
        });
      return;
    }

    domtoimage
      .toPng(cloneContainer, options)
      .then(function (dataUrl) {
        const link = document.createElement("a");
        link.download = `canvas.${extension}`;
        link.href = dataUrl;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        document.body.removeChild(offscreenContainer);
      })
      .catch(function (error) {
        console.error("Error while downloading canvas: ", error);
        document.body.removeChild(offscreenContainer);
      });
  }
};
