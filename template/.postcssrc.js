module.exports = {
  plugins: [
    require('postcss-import')(),
    require('postcss-nested')(),
    require('tailwindcss')('./build-utils/tailwindcss.config.js'),
    require('autoprefixer')(),
  ],
};
