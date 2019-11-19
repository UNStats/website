module.exports = {
  siteMetadata: {
    title: '2020 United Nations World Data Forum',
    siteUrl: 'https://undataforum.org/2020',
    description:
      'The 3rd United Nations World Data Forum took place 18-21 October 2020 in Bern, Switzerland',
  },
  plugins: [
    {
      resolve: '@undataforum/gatsby-theme-profiles',
      options: {
        description:
          'Programme Committee for the 2020 United Nations World Data Forum.',
      },
    },
  ],
};
