const purgecss = require("@fullhuman/postcss-purgecss")({
  content: ["./**/*.html"],

  // Include any special characters you're using in this regular expression
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
});

const cssnano = require("cssnano");

module.exports = {
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    ...(process.env.NODE_ENV === "production" ? [purgecss] : []),
    process.env.NODE_ENV === "production"
      ? cssnano({ preset: "default" })
      : null
  ]
};
