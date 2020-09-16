import React from 'react';
import { object, shape, string } from 'prop-types';
import { graphql } from 'gatsby';
import ProfilesPage from '@undataforum/gatsby-theme-profiles/src/components/profiles-page';
import { Text } from 'theme-ui';

const CommitteePage = ({ data, location }) => (
  // console.log(data) ||
  <ProfilesPage
    blurb={
      <Text sx={{ mb: 3 }}>
        A wide range of partners from governments, private sector, civil
        society, the United Nations system, and the scientific and academic
        communities collaborate in the organization of the United Nations World
        Data Forum. A programme committee, composed of experts and leaders from
        diverse stakeholder groups, is responsible for guiding the design of
        sessions for the 2020 United Nations World Data Forum across six
        thematic areas.
      </Text>
    }
    data={data}
    pageContext={{ collection: 'profiles', lang: 'en' }}
    location={location}
  />
);

CommitteePage.propTypes = {
  data: shape({ allProfile: object.isRequired }).isRequired,
  location: shape({ pathname: string.isRequired }).isRequired,
};

export default CommitteePage;

export const query = graphql`
  query {
    allProfile(
      sort: { fields: [lastName, firstName], order: ASC }
      filter: {
        roles: { in: "Programme Committee Member" }
        collection: { eq: "profiles" }
      }
    ) {
      nodes {
        id
        avatar {
          childImageSharp {
            fixed(height: 128, width: 128) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        }
        honorific
        name
        jobtitle
        organization
        path
      }
    }
  }
`;
