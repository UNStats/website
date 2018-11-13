const { resolve } = require("path");

exports.onCreateNode = ({ node, getNode, actions }) => {
  // Add slug and path to blog post nodes.
  if (node.internal.type === "MarkdownRemark") {
    const { relativePath } = getNode(node.parent);
    if (relativePath.startsWith("blog")) {
      const { createNodeField } = actions;

      createNodeField({
        node,
        name: "type",
        value: "article"
      });

      // Derive slug from relative path: blog/slug/index.md => slug.
      // Match result: ["blog/slug/", "slug"]
      const slug = /.*\/(.*)\//.exec(relativePath)[1];

      createNodeField({
        node,
        name: "slug",
        value: slug
      });

      createNodeField({
        node,
        name: "path",
        value: `/blog/${slug}`
      });
    }
  }
};

// Create blog pages.
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const articles = await graphql(`
    query {
      allMarkdownRemark(filter: { fields: { type: { eq: "article" } } }) {
        edges {
          node {
            fields {
              path
              slug
            }
          }
        }
      }
    }
  `);
  articles.data.allMarkdownRemark.edges.forEach(
    ({
      node: {
        fields: { path, slug }
      }
    }) => {
      createPage({
        path,
        component: resolve("./src/templates/Article.jsx"),
        context: {
          slug
        }
      });
    }
  );
};
