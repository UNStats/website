import React from 'react';
import { shape, string, object } from 'prop-types';
import {
  Box,
  Container,
  EventPreview,
  Grid,
  PostPreview,
} from '@undataforum/components';
import { Layout, Styled } from '@undataforum/gatsby-theme-base';
import { graphql } from 'gatsby';
import { normalize as normalizePost } from '@undataforum/gatsby-theme-blog';
import { normalize as normalizeEvent } from '@undataforum/gatsby-theme-events';

const Homepage = ({ location, data }) => {
  const posts = data.allPost.nodes.map(normalizePost);
  const events = data.allEvent.nodes.map(normalizeEvent);
  return (
    <Layout location={location} title="Homepage">
      <Container sx={{ maxWidth: 'width.default', px: [2, 3, 4] }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateAreas: [
              '"posts" "events"',
              '"posts" "events"',
              '"posts posts posts events events"',
            ],
            gridTemplateColumns: ['1fr', '1fr', 'repeat(5, 1fr)'],
            gridGap: [3, 4, 5],
          }}
        >
          <Box
            sx={{
              gridArea: 'posts',
            }}
          >
            <Styled.h1>Blog</Styled.h1>
            <Grid gap={3} columns={1}>
              {posts.map(({ id, ...post }) => (
                <PostPreview
                  post={{ ...post }}
                  fontSize={[3, 4]}
                  mb={3}
                  key={id}
                />
              ))}
            </Grid>
          </Box>
          <Box
            sx={{
              gridArea: 'events',
            }}
          >
            <Styled.h1>Webinars</Styled.h1>
            <Grid gap={3} columns={1}>
              {events.map(({ id, ...event }) => (
                <EventPreview event={{ ...event }} mb={3} key={id} />
              ))}
            </Grid>
          </Box>
        </Box>
      </Container>
    </Layout>
  );
};

Homepage.propTypes = {
  data: shape({
    allPost: object.isRequired,
    allEvent: object.isRequired,
  }).isRequired,
  location: shape({ pathname: string.isRequired }).isRequired,
};

export default Homepage;

export const query = graphql`
  {
    allPost(
      limit: 3
      sort: { fields: date, order: DESC }
      filter: { type: { eq: "post" } }
    ) {
      nodes {
        ...Post
      }
    }
    allEvent(limit: 2, filter: { type: { eq: "event" } }) {
      nodes {
        ...Event
      }
    }
    hero: allImageSharp(filter: { original: { src: { regex: "/hero/" } } }) {
      nodes {
        id
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
