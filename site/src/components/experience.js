import React from 'react';
import { Box, Container, Grid, Text } from 'theme-ui';

const Experience = ({ ...props }) => (
  <Container {...props} sx={{ maxWidth: 'width.wide', px: [2, 3, 4] }}>
    <Grid gap={3} columns={[1, 2, 4]}>
      <Box
        sx={{ textAlign: ['center', 'left'], p: 3, variant: 'pairings.blue' }}
      >
        <Text sx={{ fontSize: 4, fontWeight: 'heading' }}>Join</Text>
        <Text>
          together in this unique event with governments, businesses, civil
          society and the scientific and academic communities.
        </Text>
      </Box>
      <Box
        sx={{ textAlign: ['center', 'left'], p: 3, variant: 'pairings.green' }}
      >
        <Text sx={{ fontSize: 4, fontWeight: 'heading' }}>Explore</Text>
        <Text>
          innovative ways to apply data and statistics to measure global
          progress and inform evidence-based policy decisions on the 2030 Agenda
          for Sustainable Development.
        </Text>
      </Box>
      <Box
        sx={{ textAlign: ['center', 'left'], p: 3, variant: 'pairings.red' }}
      >
        <Text sx={{ fontSize: 4, fontWeight: 'heading' }}>Contribute</Text>
        <Text>
          to important discussions, data labs and interactive platforms aimed at
          improving the use of data for sustainable development.
        </Text>
      </Box>
      <Box
        sx={{ textAlign: ['center', 'left'], p: 3, variant: 'pairings.yellow' }}
      >
        <Text sx={{ fontSize: 4, fontWeight: 'heading' }}>Launch</Text>
        <Text>
          new initiatives and solutions that will deliver better data for all.
        </Text>
      </Box>
    </Grid>
  </Container>
);

export default Experience;
