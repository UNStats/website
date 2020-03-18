import { graphql } from 'gatsby';
import EventsPage from '@undataforum/gatsby-theme-events/src/components/events-page';

export default EventsPage;

export const query = graphql`
  query($collection: String!) {
    allEvent(
      sort: { fields: startDate, order: DESC }
      filter: { collection: { eq: $collection } }
    ) {
      nodes {
        id
        collection
        title {
          text
        }
        startDate
        endDate
        displayDate
        duration
        moderators {
          name
        }
        speakers {
          name
        }
        registrationLink
        path
      }
    }
  }
`;
