import React from 'react';
import { Header } from '@undataforum/components';
import { Logo } from '@undataforum/assets';

const ShadowedHeader = (props) => (
  <Header
    {...props}
    logo={<Logo scaleTo="height" />}
    links={[
      { text: 'About', href: '/about/' },
      { text: 'Committee', href: '/2020/committee/' },
      { text: 'Programme', href: '/2020/programme/' },
      { text: 'Webinars', href: '/webinars/' },
      { text: 'Blog', href: '/blog/' },
    ]}
  />
);

export default ShadowedHeader;
