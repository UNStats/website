module.exports = {
  plugins: [
    '@undataforum/gatsby-theme-base',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'thematic-area',
        path: `${__dirname}/content/thematic-areas`,
      },
    },
  ],
};
