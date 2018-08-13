module.exports = {
  plugins: [
    require('postcss-import')(),
    require('tailwindcss')('./ui/build-utils/tailwindcss.config.js'),
    require('autoprefixer')(),
  ],
};
