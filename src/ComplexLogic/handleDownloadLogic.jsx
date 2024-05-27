import * as htmlToImage from "html-to-image";

export const handleDownload = (
  size,
  format,
  transparentBackground,
) => {
  const canvasContainer = document.getElementById("canvas-container");
  if (canvasContainer) {
    let targetWidth = 1920;
    if (size === "1x") {
      targetWidth = 1920;
    } else if (size === "2x") {
      targetWidth = 2048;
    } else if (size === "4x") {
      targetWidth = 4096;
    }

    const targetHeight = targetWidth;
    htmlToImage
      .toCanvas(canvasContainer, {
        backgroundColor: transparentBackground ? null : "",
      })
      .then((canvas) => {
        const resizedCanvas = document.createElement("canvas");
        resizedCanvas.width = targetWidth;
        resizedCanvas.height = targetHeight;
        const resizedContext = resizedCanvas.getContext("2d");
        resizedContext.drawImage(canvas, 0, 0, targetWidth, targetHeight);
        resizedCanvas.toBlob((blob) => {
          const link = document.createElement("a");
          link.download = `canvas.${format.toLowerCase()}`;
          link.href = URL.createObjectURL(blob);
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }, `image/${format.toLowerCase()}`);
      })
      .catch((error) => {
        console.error("Error while converting HTML to image:", error);
      });
  }
};
