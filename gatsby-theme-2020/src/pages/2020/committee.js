import React from 'react';
import { object, shape, string } from 'prop-types';
import { graphql } from 'gatsby';
import { ProfilesPage, normalize } from '@undataforum/gatsby-theme-profiles';
import { Text } from '@undataforum/components';

const CommitteePage = ({ data, location }) => {
  // Normalize profiles and add href.
  const profiles = data.allProfile.nodes.map(({ path: href, ...profile }) => ({
    ...normalize(profile),
    href,
  }));
  return (
    <ProfilesPage
      profiles={profiles}
      title="2020 Programme Committee"
      description="Members of the 2020 United Nations World Data Forum programme committee"
      location={location}
      render={() => (
        <Text sx={{ mb: 3 }}>
          A wide range of partners from governments, private sector, civil
          society, the United Nations system, and the scientific and academic
          communities collaborate in the organization of the United Nations
          World Data Forum. A programme committee, composed of experts and
          leaders from diverse stakeholder groups, is responsible for guiding
          the design of sessions for the 2020 United Nations World Data Forum
          across six thematic areas.
        </Text>
      )}
    />
  );
};

CommitteePage.propTypes = {
  data: shape({ allProfile: object.isRequired }).isRequired,
  location: shape({ pathname: string.isRequired }).isRequired,
};

export default CommitteePage;

export const query = graphql`
  query {
    allProfile(
      sort: { fields: [lastName, firstName], order: ASC }
      filter: { roles: { in: "Programme Committee Member" } }
    ) {
      nodes {
        ...Profile
        path
      }
    }
  }
`;
