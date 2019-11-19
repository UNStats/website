import React from 'react';
import { Header } from '@undataforum/components';
import { Logo } from '@undataforum/assets';

const ShadowedHeader = props => (
  <Header
    {...props}
    logo={() => <Logo scaleTo="height" />}
    links={[
      { text: 'Blog', href: '/blog/' },
      { text: 'Events', href: '/events/' },
      { text: 'Profiles', href: '/profiles/' },
    ]}
  />
);

export default ShadowedHeader;
