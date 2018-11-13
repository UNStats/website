import React from "react";
import RehypeReact from "rehype-react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Image from "gatsby-image";
import { mdComponents, TextPage } from "@undataforum/components";
import Layout from "../components/Layout";
import ProfilePreview from "../components/ProfilePreview";

const renderAst = new RehypeReact({
  createElement: React.createElement,
  components: mdComponents
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
      frontmatter: PropTypes.object,
      fields: PropTypes.object,
      htmlAst: PropTypes.object
    })
  }).isRequired
};

export default Profile;

export const profileQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      ...ProfilePreview
      htmlAst
    }
  }
`;
