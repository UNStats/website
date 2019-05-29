module.exports = {
  siteMetadata: {
    title: 'United Nations World Data Forum',
    description:
      'The 3rd UN World Data Forum will take place from 18-21 October 2020 in Bern, Switzerland.',
    url: 'https://next.undataforum.org',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/content/`,
      },
    },
  ],
};
