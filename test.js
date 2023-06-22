'use strict';

const test = require('ava');
const randomOkLCHColor = require('./');

test('should return a valid OkLCH color', (t) => {
  t.plan(10);

  for (let i = 0; i < 10; i++) {
    const color = randomOkLCHColor();
    const regex = /^oklch\((\d{1,3}%|\d+(\.\d+)?)( \d+(\.\d+)?)? \d+(\.\d+)?(deg)?( \/ (\d{1,3}%|\d+(\.\d+)?))?\)$/;

    t.regex(color, regex);
  }
});

test('should return an object with valid OkLCH color values', (t) => {
  t.plan(50); // Update the number of assertions to match the correct count

  for (let i = 0; i < 10; i++) {
    const color = randomOkLCHColor(0, 100, 0, 132, 0, 360, 0, 1, true);
    const isValidObject = (
      typeof color === 'object' &&
      color.hasOwnProperty('lightness') &&
      color.hasOwnProperty('chroma') &&
      color.hasOwnProperty('hue') &&
      color.hasOwnProperty('alpha')
    );

    t.true(isValidObject);
    t.true(parseFloat(color.lightness) >= 0 && parseFloat(color.lightness) <= 100);
    t.true(parseFloat(color.chroma) >= 0 && parseFloat(color.chroma) <= 132);
    t.true(parseFloat(color.hue) >= 0 && parseFloat(color.hue) <= 360);
    t.true(parseFloat(color.alpha) >= 0 && parseFloat(color.alpha) <= 1);
  }
});
