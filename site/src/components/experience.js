import React from 'react';
import { Box, Container, Grid, Heading, Text } from 'theme-ui';

const Experience = ({ ...props }) => (
  <Container {...props} variant="wide">
    <Grid gap={3} columns={[1, 2, 4]}>
      <Box
        sx={{
          color: 'background',
          bg: 'blue',
          textAlign: ['center', 'left'],
          p: 3,
        }}
      >
        <Heading as="div" sx={{ fontSize: 4, mb: 3 }}>
          Join
        </Heading>
        <Text as="p">
          together in this unique event with governments, businesses, civil
          society and the scientific and academic communities.
        </Text>
      </Box>
      <Box
        sx={{
          color: 'background',
          bg: 'green',
          textAlign: ['center', 'left'],
          p: 3,
        }}
      >
        <Heading as="div" sx={{ fontSize: 4, mb: 3 }}>
          Explore
        </Heading>
        <Text as="p">
          innovative ways to apply data and statistics to measure global
          progress and inform evidence-based policy decisions on the 2030 Agenda
          for Sustainable Development.
        </Text>
      </Box>
      <Box
        sx={{
          color: 'background',
          bg: 'red',
          textAlign: ['center', 'left'],
          p: 3,
        }}
      >
        <Heading as="div" sx={{ fontSize: 4, mb: 3 }}>
          Contribute
        </Heading>
        <Text as="p">
          to important discussions, data labs and interactive platforms aimed at
          improving the use of data for sustainable development.
        </Text>
      </Box>
      <Box
        sx={{
          color: 'background',
          bg: 'yellow',
          textAlign: ['center', 'left'],
          p: 3,
        }}
      >
        <Heading as="div" sx={{ fontSize: 4, mb: 3 }}>
          Launch
        </Heading>
        <Text as="p">
          new initiatives and solutions that will deliver better data for all.
        </Text>
      </Box>
    </Grid>
  </Container>
);

export default Experience;
