const path = require('path');

module.exports = {
  plugins: [
    '@undataforum/gatsby-theme-base',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'thematic-area',
        path: path.join(__dirname, 'content', 'thematic-areas'),
      },
    },
  ],
};
