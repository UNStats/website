const { resolve } = require("path");

exports.onCreateNode = ({ actions, getNode, node }) => {
  // Add slug and path to profile nodes.
  if (node.internal.type === "MarkdownRemark") {
    const { relativePath } = getNode(node.parent);
    if (relativePath.startsWith("profiles")) {
      const { createNodeField } = actions;

      createNodeField({
        node,
        name: "type",
        value: "profile"
      });

      // If not slug defined in frontmatter, derive slug from relative path of Markdown file:
      // profiles/slug/profile.md => slug.
      // Match result: ["profiles/slug/", "slug"]
      const slug = node.frontmatter.slug || /.*\/(.*)\//.exec(relativePath)[1];

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

      // Add avatar image.
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
    query {
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
  profiles.data.allMarkdownRemark.edges.forEach(
    ({
      node: {
        fields: { path, slug }
      }
    }) => {
      createPage({
        path,
        component: resolve("./src/templates/Profile.jsx"),
        context: {
          slug
        }
      });
    }
  );
};
