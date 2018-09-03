module.exports = {
  plugins: [
    require('postcss-import')(),
    require('tailwindcss')('./build-utils/tailwindcss.config.js'),
    require('autoprefixer')(),
  ],
};
