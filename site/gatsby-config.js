module.exports = {
  siteMetadata: {
    title: 'United Nations World Data Forum',
    siteUrl: 'https://undataforum.org',
    description:
      'The third United Nations World Data Forum will be hosted by the Swiss Confederation, with substantive support from the Federal Statistical Office, from 18–21 October 2020 in Bern, Switzerland.',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-profiles',
      options: {},
    },
    {
      resolve: 'gatsby-theme-2020',
      options: {},
    },
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
        basePath: '/webinars',
        title: 'Webinars',
        description:
          'Webinars in preparation of the 2020 United Nations World Data Forum.',
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
