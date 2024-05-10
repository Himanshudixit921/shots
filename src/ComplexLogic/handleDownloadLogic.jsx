import domtoimage from "dom-to-image";
import { calculateBoxShadow } from "./cloningNode";
export const handleDownload = (size, format, transparentBackground) => {
  const canvasContainer = document.getElementById("canvas-container");
  if (canvasContainer) {
    const cloneContainer = canvasContainer.cloneNode(true);
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

    const frameContainer = cloneContainer.querySelector("#frame-container");
    if (frameContainer) {
      frameContainer.id = "frame-containerdup";
      frameContainer.style.boxShadow = calculateBoxShadow(size, targetWidth);
    }

    cloneContainer.style.width = `${targetWidth}px`;
    cloneContainer.style.height = `${targetWidth}px`;
    console.log(targetWidth);
    const options = {
      height: targetWidth,
      width: targetWidth,
      quality: 1,
      ...(transparentBackground ? { bgcolor: null } : {}),
    };

    let extension = "png";
    if (format === "JPEG") {
      domtoimage
        .toJpeg(cloneContainer, { quality: 0.95 })
        .then(function (dataUrl) {
          const link = document.createElement("a");
          link.download = `canvas.jpeg`;
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
