import baseTheme from '@undataforum/gatsby-theme-base/src/gatsby-plugin-theme-ui';
import merge from 'deepmerge';

const theme = merge(baseTheme, {
  fonts: {
    body: 'Roboto, system-ui, sans-serif',
    heading: 'Roboto, system-ui, sans-serif',
  },
  alerts: {
    muted: {
      color: 'background',
      bg: 'muted',
    },
    accent: {
      color: 'background',
      bg: 'accent',
    },
  },
});

export default theme;
