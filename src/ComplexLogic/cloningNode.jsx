const calculateBoxShadow = (size, targetWidth) => {
  let factor = 12;
  if (size === "1x") {
    targetWidth = 1920;
  } else if (size === "2x") {
    targetWidth = 2048;
  } else if (size === "4x") {
    targetWidth = 4096;
  }
  const xOffset = Math.round((factor / 550) * targetWidth);
  const yOffset = Math.round((factor / 550) * targetWidth);
  const blurRadius = Math.round((22 / 550) * targetWidth);
  return `${xOffset}px ${yOffset}px ${blurRadius}px rgba(0,0,0,0.6)`;
};
export { calculateBoxShadow };
