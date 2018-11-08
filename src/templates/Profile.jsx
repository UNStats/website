import React from "react";
import RehypeReact from "rehype-react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Image from "gatsby-image";
import {
  markdownComponents,
  ProfilePreview,
  TextPage
} from "@undataforum/components";
import Layout from "../components/Layout";

const renderAst = new RehypeReact({
  createElement: React.createElement,
  components: markdownComponents
}).Compiler;

const Profile = ({
  data: {
    markdownRemark: {
      frontmatter: { firstName, lastName, jobtitle, organization },
      fields: {
        avatar: {
          childImageSharp: { fixed }
        }
      },
      htmlAst
    }
  }
}) => {
  const name = `${firstName} ${lastName}`;
  return (
    <Layout>
      <TextPage
        title={name}
        description={`Profile of ${name}, ${jobtitle} at ${organization}`}
      >
        <ProfilePreview
          avatar={() => (
            <Image alt={name} style={{ borderRadius: `100%` }} fixed={fixed} />
          )}
          name={`${firstName} ${lastName}`}
          affiliation={{ jobtitle, organization }}
          mb={4}
        />
        {renderAst(htmlAst)}
      </TextPage>
    </Layout>
  );
};

Profile.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape({
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        jobtitle: PropTypes.string.isRequired,
        organization: PropTypes.string.isRequired
      }),
      fields: PropTypes.shape({
        avatar: PropTypes.shape({
          childImageSharp: PropTypes.shape({
            fixed: PropTypes.object.isRequired
          })
        })
      }),
      htmlAst: PropTypes.object
    })
  }).isRequired
};

export default Profile;

export const profileQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        firstName
        lastName
        jobtitle
        organization
      }
      fields {
        avatar {
          childImageSharp {
            fixed(height: 128, width: 128, cropFocus: ATTENTION, quality: 85) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
      htmlAst
    }
  }
`;
