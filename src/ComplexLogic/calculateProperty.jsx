export const calculateProperty = (
  cloneContainer,
  activeFrameType,
  targetWidth,
  frameShadowOpacity,
  containerWidth,
  containerHeight,
  CoordinateX,
  CoordinateY,
  imageX,
  imageY
) => {
  // dupContainer.style.scale = 2;
  // Object.keys(CSSID).forEach((key) => {
  //   const dupContainer = cloneContainer.querySelector(`#${key}`);
  //   const dupKey = CSSID[key];
  //   if (key === "image_container") {
  //     const container = document.getElementById("transparent_container");
  //     const height = container.offsetHeight;
  //     const width = container.offsetWidth;
  //     const containerHeight =
  //       (parseFloat(activeFrameType.height) * targetWidth) / 100;
  //     const containerWidth =
  //       (parseFloat(activeFrameType.width) * targetWidth) / 100;
  //     let cssValue = "";
  //     const newX = (imageX / width) * containerWidth;
  //     const newY = (imageY / height) * containerHeight;
  //     cssValue += `translate(${newX}px, ${newY}px)`;
  //     dupContainer.style.transform = `${cssValue}`;
  //     console.log(cssValue);
  //   } else {
  //     if (dupContainer) {
  //       Object.keys(dupKey).forEach((styleKey) => {
  //         let cssValue = "";
  //         for (let a = 0; a < dupKey[styleKey].length; a++) {
  //           let calculatedStyle = (dupKey[styleKey][a] / size) * targetWidth;
  //           cssValue += calculatedStyle + "px ";
  //         }
  //         if (styleKey === "boxShadow") {
  //           cssValue += `rgba(0,0,0,${frameShadowOpacity})`;
  //         }
  //         if (styleKey === "transform") {
  //           cssValue = "";
  //           const newX = (CoordinateX / containerWidth) * targetWidth;
  //           const newY = (CoordinateY / containerHeight) * targetWidth;
  //           cssValue += `translate(${newX}px, ${newY}px)`;
  //           dupContainer.style[styleKey] = `${cssValue}`;
  //           console.log(dupContainer.style[styleKey]);
  //         }
  //         dupContainer.style[styleKey] = cssValue.trim();
  //       });
  //     }
  //   }
  // });
};
