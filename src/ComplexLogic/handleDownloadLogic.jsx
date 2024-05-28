import domtoimage from "dom-to-image";
import { calculateProperty } from "./calculateProperty";
export const handleDownload = (
  size,
  format,
  transparentBackground,
  frameShadowOpacity,
  activeFrameType
) => {
  const canvasContainer = document.getElementById("canvas-container");
  if (canvasContainer) {
    let cloneContainer = canvasContainer.cloneNode(true);
    const destination = document.createElement("div");
    destination.id = "destination";
    document.body.appendChild(destination);
    destination.appendChild(cloneContainer);

    let targetWidth = 1920;
    if (size === "1x") {
      targetWidth = 1920;
    } else if (size === "2x") {
      targetWidth = 2048;
    } else if (size === "4x") {
      targetWidth = 4096;
    }
    calculateProperty(
      cloneContainer,
      activeFrameType,
      targetWidth,
      frameShadowOpacity
    );

    cloneContainer.style.width = `${targetWidth}px`;
    cloneContainer.style.height = `${targetWidth}px`;
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
          document.body.removeChild(destination);
        })
        .catch(function (error) {
          console.error("Error while downloading canvas: ", error);
          document.body.removeChild(destination);
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
        document.body.removeChild(destination);
      })
      .catch(function (error) {
        console.error("Error while downloading canvas: ", error);
        document.body.removeChild(destination);
      });
  }
};
