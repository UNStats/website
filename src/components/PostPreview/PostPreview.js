import { PostPreview } from "@undataforum/components";
import { graphql } from "gatsby";

export default PostPreview;

export const query = graphql`
  fragment PostPreview on MarkdownRemark {
    excerpt
    frontmatter {
      title
      date(formatString: "MMM DD, YYYY")
      authors
    }
  }
`;
