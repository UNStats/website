import React, { Fragment } from 'react';
import { shape, object } from 'prop-types';
import { graphql } from 'gatsby';
import { Layout, MDXRenderer, Styled } from '@undataforum/gatsby-theme-base';
import { Container, SmartLink } from '@undataforum/components';

const ProgrammePage = ({ data }) => {
  const thematicAreas = data.allMdx.nodes.map(
    ({ frontmatter: { id, title }, body }) => ({ id, title, body })
  );
  return (
    <Layout
      title="Programme"
      description="Programme with six thematic areas for the United Nations World Data Forum 2020."
    >
      <Container sx={{ maxWidth: 'width.narrow', px: [2, 3, 4] }}>
        <Styled.h1>Programme</Styled.h1>
        <Styled.p>
          The programme of the United Nations World Data Forum 2020 is organized
          around six thematic areas. It is designed to bring together
          representatives, users and producers from various sectors working with
          data to support the implementation of the{' '}
          <SmartLink href="https://sustainabledevelopment.un.org/post2015/transformingourworld">
            2030 Agenda for Sustainable Development
          </SmartLink>{' '}
          and the{' '}
          <SmartLink href="https://sustainabledevelopment.un.org/sdgs">
            Sustainable Development Goals
          </SmartLink>
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
          <SmartLink href="/2020/call-for-proposals">here</SmartLink> and closes
          on 31 January 2020.
        </Styled.p>
        {thematicAreas.map(({ id, title, body }) => (
          <Fragment key={id}>
            <Styled.h2>{`${id} ${title}`}</Styled.h2>
            <MDXRenderer>{body}</MDXRenderer>
          </Fragment>
        ))}
      </Container>
    </Layout>
  );
};

ProgrammePage.propTypes = {
  data: shape({ allMdx: object.isRequired }).isRequired,
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
          title
        }
        body
      }
    }
  }
`;
