import React from 'react';
import { shape, object } from 'prop-types';
import { Container, Grid, Styled } from 'theme-ui';
import { EventPreview, PostPreview } from '@undataforum/components';
import { Layout } from '@undataforum/gatsby-theme-base';
import { graphql } from 'gatsby';
import { normalize as normalizePost } from '@undataforum/gatsby-theme-blog';
import { normalize as normalizeEvent } from '@undataforum/gatsby-theme-events';

import Hero from '../components/hero';
import About from '../components/about';
import Experience from '../components/experience';

// If you change the hero image, you need to update the page query:
// - update filename regex,
// - update maxWidth to avoid blurry images.
const Homepage = ({ data }) => {
  const posts = data.allPost.nodes.map(normalizePost);
  const events = data.allEvent.nodes.map(normalizeEvent);
  // eslint-disable-next-line no-unused-vars
  const { description, ...promotedEvent } = events[0];
  return (
    <Layout title="Homepage" description={data.site.siteMetadata.description}>
      <Hero
        alt="View of Bern, Switzerland. The river Aare with its distinct blue water is in the foreground. The city with its landmark cathedral and typical Swiss town houses are in the center."
        title="View of Bern"
        fluid={data.hero.nodes[0].fluid}
        event={() => (
          <EventPreview
            event={promotedEvent}
            colors={{
              text: 'background',
              background: 'secondary',
              accent: 'background',
            }}
            align={['center', 'start']}
          />
        )}
        mt={-3}
        mb={[4, 5]}
      />
      <About mb={[4, 5]} />
      <Experience mb={[4, 5]} />
      <Container
        sx={{
          maxWidth: 'width.default',
          px: [2, 3, 4],
        }}
      >
        <Styled.h1>Webinars</Styled.h1>
        <Grid gap={[4, 5]} columns={[1, null, 2]} sx={{ mb: [4, 5] }}>
          {events.map(({ id, ...event }) => (
            <EventPreview event={{ ...event }} key={id} />
          ))}
        </Grid>
        <Styled.h1>Blog</Styled.h1>
        <Grid gap={[4, 5]} columns={[1, null, 2]}>
          {posts.map(({ id, ...post }) => (
            <PostPreview post={{ ...post }} fontSize={[3, 4]} key={id} />
          ))}
        </Grid>
      </Container>
    </Layout>
  );
};

Homepage.propTypes = {
  data: shape({
    allPost: object.isRequired,
    allEvent: object.isRequired,
  }).isRequired,
};

export default Homepage;

export const query = graphql`
  {
    site {
      siteMetadata {
        description
      }
    }
    allPost(
      limit: 4
      sort: { fields: date, order: DESC }
      filter: { type: { eq: "post" } }
    ) {
      nodes {
        ...Post
      }
    }
    allEvent(
      limit: 4
      sort: { fields: startDate, order: DESC }
      filter: { type: { eq: "event" } }
    ) {
      nodes {
        ...Event
      }
    }
    hero: allImageSharp(
      filter: {
        original: { src: { regex: "/will-truettner-aigrKLc6xc0-unsplash/" } }
      }
    ) {
      nodes {
        id
        fluid(maxWidth: 4912) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
