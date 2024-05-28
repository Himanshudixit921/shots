export const calculateProperty = (
  cloneContainer,
  activeFrameType,
  targetWidth,
  frameShadowOpacity
) => {
  const size = 550;
  const { CSSID } = activeFrameType;

  Object.keys(CSSID).forEach((key) => {
    const dupContainer = cloneContainer.querySelector(`#${key}`);
    const dupKey = CSSID[key];

    if (dupContainer) {
      Object.keys(dupKey).forEach((styleKey) => {
        let cssValue = "";

        for (let a = 0; a < dupKey[styleKey].length; a++) {
          let calculatedStyle = (dupKey[styleKey][a] / size) * targetWidth;
          cssValue += calculatedStyle + "px ";
        }
        if (styleKey === "boxShadow")
          cssValue += `rgba(0,0,0,${frameShadowOpacity})`;
        dupContainer.style[styleKey] = cssValue.trim();
      });
    }
  });
};
