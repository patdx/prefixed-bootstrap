module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    "postcss-import": {},
    "postcss-plugin-context": {
      "with-bs-prefix": require("postcss-prefixer")({ prefix: "bs-" }),
    },
  },
};
