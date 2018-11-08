const path = require("path");

exports.onCreateNode = ({ node, getNode, actions }) => {
  // Add slug and path to profile MDX nodes.
  if (node.internal.type === "MarkdownRemark") {
    const { relativePath } = getNode(node.parent);
    if (relativePath.startsWith("profiles")) {
      const { createNodeField } = actions;

      createNodeField({
        node,
        name: "type",
        value: "profile"
      });

      // Derive slug from relative path: profiles/homer-simpson/profile.md => homer-simpson.
      // Match result: ["profiles/homer-simpson/", "homer-simpson"]
      const slug = /.*\/(.*)\//.exec(relativePath)[1];

      createNodeField({
        node,
        name: "slug",
        value: slug
      });

      createNodeField({
        node,
        name: "path",
        value: `/profiles/${slug}`
      });

      createNodeField({
        node,
        name: "avatar",
        value: "avatar.jpg"
      });
    }
  }
};

// Create profile pages.
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const profiles = await graphql(`
    query Profiles {
      allMarkdownRemark(filter: { fields: { type: { eq: "profile" } } }) {
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
  profiles.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.path,
      component: path.resolve("./src/templates/Profile.jsx"),
      context: {
        slug: node.fields.slug
      }
    });
  });
};
