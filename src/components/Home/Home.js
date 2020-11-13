import * as React from 'react';
import { view } from 'react-easy-state';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDebounce } from 'utils/Hook';
import Hero from './Hero';
import HelloThere from './HelloThere';
import WhatFuture from './WhatFuture';
import The5Whats from './The5Whats';
import HolisticApproach from './HolisticApproach';
import Organizations from './Organizations';

import PicBanner from 'media/linked-in-banner.png';

export default view((props) => {
  const { pathname } = useLocation();
  
  const routeChild = '/home/' + props.route;
  

  useEffect(() => {
    if (pathname=='/' || pathname=='/home' ) {
      window.scrollTo(0, 0);
    } else if (document.getElementById(pathname)){
      document.getElementById(pathname).scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [pathname]);

  if (routeChild && document.getElementById(routeChild)){
    document.getElementById(routeChild).scrollIntoView({ behavior: 'smooth', block: 'start' })
  }


  const Banner = () => (
    <section>
        <img src={PicBanner} style={{ width: '100%' }} />
      </section>
  );

  const GetInTouchTitle = () => (
      <section className='section'>
        <div className='mx-6'>
          <div className='container pl-3'>
            <h1 className='title is-1'>Get in touch</h1>
            <h2 className='subtitle'>
              I will help you answer the most challenging questions of design.
            </h2>
          </div>
        </div>
      </section>
  );

  return (
    <React.Fragment>
      <Hero />
      <HelloThere />
      <WhatFuture />
      <Organizations />
      <The5Whats />
      <HolisticApproach />
      <Banner />
      <GetInTouchTitle/>
    </React.Fragment>
  )
});
