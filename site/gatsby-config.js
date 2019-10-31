module.exports = {
  siteMetadata: {
    title: 'United Nations World Data Forum',
    siteUrl: 'https://undataforum.org',
    description:
      'The 3rd United Nations World Data Forum will take place from 18-21 October 2020 in Bern, Switzerland.',
  },
  plugins: [
    {
      resolve: '@undataforum/gatsby-theme-blog',
      options: { basePath: '/blog' },
    },
    {
      resolve: '@undataforum/gatsby-theme-events',
      options: { basePath: '/events' },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
  ],
};
