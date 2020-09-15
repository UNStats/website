import React from 'react';
import { shape, string, object } from 'prop-types';
import { graphql } from 'gatsby';
import { Container, Grid, Heading, Link, Styled, Text } from 'theme-ui';
import { Layout, MDXRenderer, Seo } from '@undataforum/gatsby-theme-base';
import { Card } from '@undataforum/components';

const ProgrammePage = ({ data, location }) => {
  const thematicAreas = data.allMdx.nodes.map(
    ({ frontmatter: { id, color, title, subtitle }, body }) => ({
      id,
      color,
      title,
      subtitle,
      body,
    })
  );
  return (
    <Layout location={location}>
      <Seo
        title="Programme"
        description="Programme with six thematic areas for the 2020 United Nations World Data Forum."
      />
      <Container sx={{ maxWidth: 'width.narrow', px: [2, 3, 4] }}>
        <Styled.h1>Programme</Styled.h1>
        <Styled.p>
          The programme of the United Nations World Data Forum 2020 is organized
          around six thematic areas. It is designed to bring together
          representatives, users and producers from various sectors working with
          data to support the implementation of the{' '}
          <Link href="https://sustainabledevelopment.un.org/post2015/transformingourworld">
            2030 Agenda for Sustainable Development
          </Link>{' '}
          and the{' '}
          <Link href="https://sustainabledevelopment.un.org/sdgs">
            Sustainable Development Goals
          </Link>
          .
        </Styled.p>
        <Styled.p>
          Contributions under each thematic area should showcase practical
          solutions and hands-on experiences and contribute to delivering better
          data for evidence-based policymaking and address pressing issues faced
          by the global data and statistical communities.
        </Styled.p>
        <Styled.p>
          Throughout the United Nations World Data Forum 2020, participants will
          have opportunities to interact in a variety of session formats,
          including plenary sessions, round table dialogues, debates, break-out
          spaces, innovation labs, workshops, knowledge sharing spaces, exhibits
          and virtual forums. The programme is developed through an open call
          for session proposals. The call for session proposals can be found{' '}
          <Link href="/2020/call-for-proposals">here</Link> and closes on 31
          January 2020.
        </Styled.p>
        <Grid gap={[3, 4]}>
          {thematicAreas.map(({ id, color, title, subtitle, body }) => (
            <Card
              key={id}
              color={color}
              title={
                <Heading as="h2" sx={{ mb: 2 }}>{`${id} ${title}`}</Heading>
              }
              subtitle={<Text>{subtitle}</Text>}
            >
              <MDXRenderer>{body}</MDXRenderer>
            </Card>
          ))}
        </Grid>
      </Container>
    </Layout>
  );
};

ProgrammePage.propTypes = {
  data: shape({ allMdx: object.isRequired }).isRequired,
  location: shape({ pathname: string.isRequired }).isRequired,
};

export default ProgrammePage;

export const query = graphql`
  {
    allMdx(
      filter: { frontmatter: { id: { regex: "/^TA/" } } }
      sort: { fields: [frontmatter___id], order: [ASC] }
    ) {
      nodes {
        frontmatter {
          id
          color
          title
          subtitle
        }
        body
      }
    }
  }
`;
