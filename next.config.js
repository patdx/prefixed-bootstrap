module.exports = {
  future: {
    webpack5: true,
  },
  webpack: (config) => {
    // Disable minify so it is easier to inspect the CSS
    // in the compiled application.
    config.optimization.minimize = false;
    return config;
  },
};
