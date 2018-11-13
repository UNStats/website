module.exports = {
  siteMetadata: {
    title: "United Nations World Data Forum",
    description:
      "The 3rd UN World Data Forum will take place from 18-21 October 2020 in Bern, Switzerland.",
    url: "https://next.undataforum.org"
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: `${__dirname}/content/`
      }
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        excerpt_separator: "<!-- end -->",
        plugins: ["gatsby-remark-autolink-headers", "gatsby-remark-smartypants"]
      }
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-blog",
    "gatsby-plugin-profiles",
    "gatsby-plugin-react-helmet"
  ]
};
