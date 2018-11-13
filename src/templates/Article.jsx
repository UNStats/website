import React from "react";
import RehypeReact from "rehype-react";
import PropTypes from "prop-types";
import { graphql, Link } from "gatsby";
import Image from "gatsby-image";
import { mdComponents, TextPage } from "@undataforum/components";
import Layout from "../components/Layout";
import PostPreview from "../components/PostPreview";

const renderAst = new RehypeReact({
  createElement: React.createElement,
  components: mdComponents
}).Compiler;

const Article = ({
  data: {
    article: {
      excerpt,
      frontmatter: { title, date, authors: articleAuthors },
      htmlAst
    },
    authors: { edges: allAuthorNodes }
  }
}) => {
  // Excerpts have leading \n and trailing \n\n.
  const description = excerpt.trim();
  return (
    <Layout>
      <TextPage title={title} description={description}>
        <PostPreview
          title={title}
          date={date}
          authors={allAuthorNodes
            // Filter matching authors (using slug).
            .filter(({ node: { fields: { slug } } }) =>
              articleAuthors.includes(slug)
            )
            // Map to format required by ProfileList in PostPreview.
            .map(
              ({
                node: {
                  id,
                  frontmatter: { firstName, lastName },
                  fields: {
                    avatar: {
                      childImageSharp: { fixed }
                    },
                    path
                  }
                }
              }) => {
                const name = `${firstName} ${lastName}`;
                return {
                  id,
                  avatar: () => (
                    <Image
                      alt={name}
                      style={{ borderRadius: `100%` }}
                      fixed={fixed}
                    />
                  ),
                  name,
                  href: path
                };
              }
            )}
          link={({ children, href, className }) => (
            <Link to={href} className={className}>
              {children}
            </Link>
          )}
        />

        {renderAst(htmlAst)}
      </TextPage>
    </Layout>
  );
};

Article.propTypes = {
  data: PropTypes.shape({
    article: PropTypes.object,
    authors: PropTypes.shape({ edges: PropTypes.arrayOf(PropTypes.object) })
  }).isRequired
};

export default Article;

export const articleQuery = graphql`
  query($slug: String!) {
    article: markdownRemark(
      fields: { slug: { eq: $slug }, type: { eq: "article" } }
    ) {
      ...PostPreview
      htmlAst
    }
    authors: allMarkdownRemark(
      sort: {
        order: ASC
        fields: [frontmatter___lastName, frontmatter___firstName]
      }
      filter: { fields: { type: { eq: "profile" } } }
    ) {
      edges {
        node {
          ...Avatar
          fields {
            avatar {
              childImageSharp {
                fixed(height: 64, width: 64, quality: 85) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
`;
