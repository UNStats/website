import { ProfilePreview } from "@undataforum/components";
import { graphql } from "gatsby";

export default ProfilePreview;

export const query = graphql`
  fragment ProfilePreview on MarkdownRemark {
    frontmatter {
      firstName
      lastName
      jobtitle
      organization
    }
    fields {
      avatar {
        childImageSharp {
          fixed(height: 128, width: 128, quality: 85) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      path
      slug
    }
  }

  fragment Avatar on MarkdownRemark {
    frontmatter {
      firstName
      lastName
    }
    fields {
      avatar {
        childImageSharp {
          fixed(height: 64, width: 64, quality: 85) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      path
      slug
    }
  }
`;
