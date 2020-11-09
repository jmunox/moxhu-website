import * as React from 'react';
import { view } from 'react-easy-state';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from './Hero';
import HelloThere from './HelloThere';
import WhatFuture from './WhatFuture';
import The5Whats from './The5Whats';
import HolisticApproach from './HolisticApproach';

import PicBanner from 'media/linked-in-banner.png';

export default view((props) => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <React.Fragment>
      <Hero/>
      <HelloThere/>
      <WhatFuture/>
      <The5Whats/>
      <HolisticApproach/> 
      <section>
        <img src={PicBanner} />
      </section>
    </React.Fragment>
  )
})
