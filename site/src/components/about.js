import React from 'react';
import { Container, Text, SmartLink } from '@undataforum/components';

const About = ({ ...props }) => (
  <Container
    {...props}
    sx={{
      maxWidth: 'width.narrow',
      fontSize: 3,
      textAlign: 'center',
      px: [2, 3, 4],
    }}
  >
    <Text sx={{ mb: 3 }}>
      The third United Nations World Data Forum will be hosted by the{' '}
      <SmartLink href="https://www.admin.ch/gov/en/start.html">
        Swiss Confederation
      </SmartLink>{' '}
      with substantive support from the{' '}
      <SmartLink href="https://www.bfs.admin.ch/bfs/en/home.html">
        Swiss Federal Statistical Office
      </SmartLink>{' '}
      from 18–21 October 2020 in Bern, Switzerland.
    </Text>
    <Text>
      Supported by the{' '}
      <SmartLink href="https://unstats.un.org/">Statistics Division</SmartLink>{' '}
      of the{' '}
      <SmartLink href="https://www.un.org/development/desa/en/">
        United Nations Department of Economic and Social Affairs
      </SmartLink>
      , under the guidance of the{' '}
      <SmartLink href="https://unstats.un.org/unsd/statcom/">
        United Nations Statistical Commission
      </SmartLink>{' '}
      and the{' '}
      <SmartLink href="https://unstats.un.org/sdgs/hlg/">
        High-level Group for Partnership, Coordination and Capacity-Building for
        Statistics for the 2030 Agenda for Sustainable Development
      </SmartLink>
      .
    </Text>
  </Container>
);

export default About;
