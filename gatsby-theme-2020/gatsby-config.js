module.exports = {
  plugins: [
    {
      resolve: '@undataforum/gatsby-theme-profiles',
      options: {
        basePath: '/2020/profiles',
        contentPath: `${__dirname}/content/profiles`,
        assetPath: `${__dirname}/content/assets/profiles`,
        description:
          'Speakers and organizers for the 2020 United Nations World Data Forum.',
        type: '2020',
      },
    },
  ],
};
