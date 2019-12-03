module.exports = {
  plugins: [
    {
      resolve: '@undataforum/gatsby-theme-profiles',
      options: {
        basePath: '/profiles',
        contentPath: `${__dirname}/content/profiles`,
        assetPath: `${__dirname}/content/assets`,
        description:
          'Profiles of United Nations World Data Forum speakers, contributors, programme committee members and organizers.',
      },
    },
  ],
};
