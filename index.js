'use strict';

module.exports = function randomOkLCHColor(
  minL = 0,
  maxL = 100,
  minC = 0,
  maxC = 132,
  minH = 0,
  maxH = 360,
  minAlpha = 0,
  maxAlpha = 1,
  useObjectExport = false
) {
  const randomValue = (min, max) => {
    if (max <= 1) {
      return Math.random() * (max - min) + min;
    } else {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  };

  const formatPercentage = (value) => {
    if (value === 0) return '0%';
    return value.toFixed(2).replace(/\.?0+%?$/, '%');
  };

  const formatDegrees = (value) => {
    if (value === 0) return '0';
    return value.toFixed(0) + 'deg';
  };

  const lightness = formatPercentage(randomValue(minL, maxL));
  const chroma = randomValue(minC, maxC);
  const hue = formatDegrees(randomValue(minH, maxH));
  const alpha = formatPercentage(randomValue(minAlpha, maxAlpha));

  if (useObjectExport) {
    return { lightness, chroma, hue, alpha };
  }

  return `oklch(${lightness} ${chroma} ${hue}${alpha ? ` / ${alpha}` : ''})`;
};
