# random-oklch-color

Generate a random OKLCH color.

## Installation

```bash
npm install --save random-oklch-color
```

## Usage

The `randomOkLCHColor` function can be used to generate a random OKLCH color. By default, it returns the color as a string in the `oklch(L C H / A%)` format. However, you can also opt to get an object representation of the color by setting the `useObjectExport` parameter to `true`.

```javascript
var randomOkLCHColor = require('random-oklch-color');

// Generate random OKLCH color as a string
console.log(randomOkLCHColor()); // oklch(64% 0.1 233deg)
console.log(randomOkLCHColor(0, 1, 0, 1, 0, 360, 0, 1)); // oklch(0.34 0.58 73deg / 0.62)

// Generate random OKLCH color as an object
console.log(randomOkLCHColor(0, 1, 0, 1, 0, 360, 0, 1, true));
// { lightness: '0.85%', chroma: 0.37, hue: '0deg', alpha: '0.92%' }
```

In the object representation, the returned object contains the following properties:

- **lightness**: The value of the lightness channel (range: 0 to 100).
- **chroma**: The value of the chroma channel (range: 0 to 132).
- **hue**: The value of the hue channel (range: 0 to 360).
- **alpha**: The value of the alpha channel (range: 0 to 100).

By adjusting the input parameters and using the `useObjectExport` parameter, you can control the range of each channel and obtain the color as an object with the respective channel values.

## Acknowledgements

This package is inspired by the generative color concept and the need for random color generation. It is crafted to simplify the process of generating random OKLCH colors.

## License

MIT

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new Pull Request

## Additional Resources

Here are some additional resources that provide information about the OKLCH color space:

- [OKLCH Color Space on Wikipedia](https://en.wikipedia.org/wiki/OKLab)
- [Color Space Conversion on Adobe Developer](https://www.adobe.io/photoshop/uxp/guides/color-spaces/)
- [Generative Art and Color Spaces on Medium](https://medium.com/generative-art/color-spaces-for-generative-art-d807da71fc7b)

Feel free to explore these resources to learn more about okLCH and its applications in generative art and design.

Crafted for generative doings by [Adam Morse] ([@mrmrs_](https://mrmrs.cc)).
