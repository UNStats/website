module.exports = {
  siteMetadata: {
    title: 'United Nations World Data Forum',
    siteUrl: 'https://undataforum.org',
    description:
      'The third United Nations World Data Forum will be hosted by the Swiss Confederation, with substantive support from the Swiss Federal Statistical Office, from 18–21 October 2020 in Bern, Switzerland.',
  },
  plugins: [
    'gatsby-theme-profiles',
    'gatsby-theme-2020',
    {
      resolve: '@undataforum/gatsby-theme-blog',
      options: {
        basePath: '/blog',
        // contentPath: 'content/posts',
        assetPath: 'content/assets/posts',
        profiles: 'profiles',
      },
    },
    {
      resolve: '@undataforum/gatsby-theme-events',
      options: {
        basePath: '/webinars',
        // contentPath: 'content/events',
        assetPath: 'content/assets/events',
        profiles: 'profiles',
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
