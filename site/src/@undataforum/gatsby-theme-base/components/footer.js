import React from 'react';
import { Box, Link } from 'theme-ui';
import {
  EmailIcon,
  Footer,
  GitHubIcon,
  SocialIcons,
  TwitterIcon,
} from '@undataforum/components';
import { Logo } from '@undataforum/assets';

const ShadowedFooter = () => {
  return (
    <Footer
      logo={
        <Box
          sx={{
            height: [96, null, 128],
            mb: [2, 3],
          }}
        >
          <Logo scaleTo="height" monochrome />
        </Box>
      }
      links={[
        { text: 'About', href: '/about/' },
        { text: 'Contact', href: '/contact/' },
        { text: 'Copyright', href: '/copyright/' },
        { text: 'Privacy Notice', href: '/privacy/' },
        { text: 'Terms of Use', href: '/terms/' },
      ]}
      socialIcons={
        <SocialIcons
          values={[
            {
              id: 'twitter',
              icon: (
                <Link
                  href="https://twitter.com/undataforum"
                  sx={{ color: 'inherit' }}
                >
                  <TwitterIcon size={32} title="Follow us on Twitter" />
                </Link>
              ),
            },
            {
              id: 'github',
              icon: (
                <Link
                  href="https://github.com/undataforum"
                  sx={{ color: 'inherit' }}
                >
                  <GitHubIcon size={32} title="Follow us on GitHub" />
                </Link>
              ),
            },
            {
              id: 'email',
              icon: (
                <Link href="mailto:dataforum@un.org" sx={{ color: 'inherit' }}>
                  <EmailIcon size={32} title="Send us an email" />
                </Link>
              ),
            },
          ]}
          mb={3}
        />
      }
    />
  );
};

export default ShadowedFooter;
