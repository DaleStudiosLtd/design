const mix = require("laravel-mix");

mix.postCss("src/css/fonts.css", "dist/css");
mix.postCss("src/css/vars.css", "dist/css");

mix.postCss("src/css/app.css", "dist/css", [
  require("autoprefixer"),
  require("tailwindcss")
]);

mix.js("src/js/index.js", "dist/js").extract(["vue"]);
