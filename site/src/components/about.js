import React from 'react';
import { Container, Link, Text } from 'theme-ui';

const About = ({ ...props }) => (
  <Container
    {...props}
    sx={{
      maxWidth: 'layout.narrow',
      fontSize: 3,
      textAlign: 'center',
    }}
  >
    <Text sx={{ mb: 3 }}>
      The third United Nations World Data Forum will be hosted by the{' '}
      <Link href="https://www.admin.ch/gov/en/start.html">
        Swiss Confederation
      </Link>{' '}
      with substantive support from the{' '}
      <Link href="https://www.bfs.admin.ch/bfs/en/home.html">
        Swiss Federal Statistical Office
      </Link>{' '}
      from 18–21 October 2020 in Bern, Switzerland.
    </Text>
    <Text>
      Supported by the{' '}
      <Link href="https://unstats.un.org/">Statistics Division</Link> of the{' '}
      <Link href="https://www.un.org/development/desa/en/">
        United Nations Department of Economic and Social Affairs
      </Link>
      , under the guidance of the{' '}
      <Link href="https://unstats.un.org/unsd/statcom/">
        United Nations Statistical Commission
      </Link>{' '}
      and the{' '}
      <Link href="https://unstats.un.org/sdgs/hlg/">
        High-level Group for Partnership, Coordination and Capacity-Building for
        Statistics for the 2030 Agenda for Sustainable Development
      </Link>
      .
    </Text>
  </Container>
);

export default About;
