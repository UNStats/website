module.exports = {
  siteMetadata: {
    title: 'United Nations World Data Forum',
    siteUrl: 'https://undataforum.org',
    description:
      'The 3rd United Nations World Data Forum will take place 18-21 October 2020 in Bern, Switzerland.',
  },
  plugins: [
    {
      resolve: '@undataforum/gatsby-theme-blog',
      options: {
        basePath: '/blog',
        description:
          'Blog authored by the United Nations World Data Forum community.',
      },
    },
    {
      resolve: '@undataforum/gatsby-theme-events',
      options: {
        basePath: '/events',
        description:
          'Events in preparation of the 2020 United Nations World Data Forum.',
      },
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
