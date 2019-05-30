module.exports = {
  siteMetadata: {
    title: 'United Nations World Data Forum',
    siteUrl: 'https://undataforum.org',
    description:
      'The 3rd United Nations World Data Forum will take place from 18-21 October 2020 in Bern, Switzerland.',
    navigation: {
      links: [
        { text: 'About', href: '/about/' },
        {
          text: 'Blog',
          href: '/blog/',
        },
      ],
      button: {
        text: 'Register',
        href: '/register/',
      },
    },
  },
  __experimentalThemes: ['gatsby-theme-undataforum'],
};
