module.exports = {
  webpack: config => {
    // add modules
    config.module.rules.push({
      test: /\.md$/,
      use: 'frontmatter-markdown-loader'
    });

    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    };

    return config;
  }
};
