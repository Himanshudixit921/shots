// export const calculateProperty = (
//   cloneContainer,
//   activeFrameType,
//   targetWidth,
//   frameShadowOpacity,
//   containerWidth,
//   containerHeight,
//   CoordinateX,
//   CoordinateY,
//   imageX,
//   imageY
// ) => {
//   dupContainer.style.scale = 2;
//   Object.keys(CSSID).forEach((key) => {
//     const dupContainer = cloneContainer.querySelector(`#${key}`);
//     const dupKey = CSSID[key];
//     if (key === "image_container") {
//       const container = document.getElementById("transparent_container");
//       const height = container.offsetHeight;
//       const width = container.offsetWidth;
//       const containerHeight =
//         (parseFloat(activeFrameType.height) * targetWidth) / 100;
//       const containerWidth =
//         (parseFloat(activeFrameType.width) * targetWidth) / 100;
//       let cssValue = "";
//       const newX = (imageX / width) * containerWidth;
//       const newY = (imageY / height) * containerHeight;
//       cssValue += `translate(${newX}px, ${newY}px)`;
//       dupContainer.style.transform = `${cssValue}`;
//       console.log(cssValue);
//     } else {
//       if (dupContainer) {
//         Object.keys(dupKey).forEach((styleKey) => {
//           let cssValue = "";
//           for (let a = 0; a < dupKey[styleKey].length; a++) {
//             let calculatedStyle = (dupKey[styleKey][a] / size) * targetWidth;
//             cssValue += calculatedStyle + "px ";
//           }
//           if (styleKey === "boxShadow") {
//             cssValue += `rgba(0,0,0,${frameShadowOpacity})`;
//           }
//           if (styleKey === "transform") {
//             cssValue = "";
//             const newX = (CoordinateX / containerWidth) * targetWidth;
//             const newY = (CoordinateY / containerHeight) * targetWidth;
//             cssValue += `translate(${newX}px, ${newY}px)`;
//             dupContainer.style[styleKey] = `${cssValue}`;
//             console.log(dupContainer.style[styleKey]);
//           }
//           dupContainer.style[styleKey] = cssValue.trim();
//         });
//       }
//     }
//   });
// };
// working code

// import domtoimage from "dom-to-image";

// export const handleDownload = (
//   size,
//   format,
//   transparentBackground,
//   containerWidth,
//   frameScale
// ) => {
//   const canvasContainer = document.getElementById("canvas-container");
//   const height = document.getElementById("transparent_container").offsetHeight;
//   const width = document.getElementById("transparent_container").offsetWidth;

//   if (canvasContainer) {
//     let targetWidth = 1920;
//     if (size === "1x") {
//       targetWidth = 1920;
//     } else if (size === "2x") {
//       targetWidth = 2048;
//     } else if (size === "4x") {
//       targetWidth = 4096;
//     }
//     let cloneContainer = canvasContainer.cloneNode(true);
//     const i = cloneContainer.querySelector("#transparent_container");
//     i.style.width = `${width}px`;
//     i.style.height = `${height}px`;
//     const scalingFactor = (targetWidth / containerWidth) * frameScale;
//     i.style.scale = `${scalingFactor}`;
//     const destination = document.createElement("div");
//     destination.id = "destination";
//     document.body.appendChild(destination);
//     destination.appendChild(cloneContainer);

//     const offscreenContainer = document.createElement("div");
//     offscreenContainer.style.position = "fixed";
//     offscreenContainer.style.left = "-9999px";
//     offscreenContainer.style.top = "-9999px";
//     offscreenContainer.appendChild(destination);
//     document.body.appendChild(offscreenContainer);

//     const options = {
//       height: targetWidth,
//       width: targetWidth,
//       quality: 1,
//       ...(transparentBackground ? { bgcolor: null } : {}),
//     };

//     let extension = "png";
//     if (format === "JPEG") {
//       domtoimage
//         .toJpeg(cloneContainer, { quality: 1 })
//         .then(function (dataUrl) {
//           const link = document.createElement("a");
//           link.download = `canvas.jpeg`;
//           link.href = dataUrl;
//           link.click();
//           document.body.removeChild(offscreenContainer);
//         })
//         .catch(function (error) {
//           console.error("Error while downloading canvas: ", error);
//           document.body.removeChild(offscreenContainer);
//         });
//       return;
//     }

//     domtoimage
//       .toPng(cloneContainer, options)
//       .then(function (dataUrl) {
//         const link = document.createElement("a");
//         link.download = `canvas.${extension}`;
//         link.href = dataUrl;
//         document.body.appendChild(link);
//         link.click();
//         document.body.removeChild(link);
//         document.body.removeChild(offscreenContainer);
//       })
//       .catch(function (error) {
//         console.error("Error while downloading canvas: ", error);
//         document.body.removeChild(offscreenContainer);
//       });
//   }
// };
