import * as React from 'react';
import { view } from 'react-easy-state';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from './Hero';
import HelloThere from './HelloThere';
import WhatFuture from './WhatFuture';
import The5Whats from './The5Whats';
import HolisticApproach from './HolisticApproach';
import Organizations from './Organizations';

import LoadingIntro from 'components/LoadingIntro/LoadingIntro';

import PicBanner from 'media/banner-portfolio.png';

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
        <div className=''>
          <div className='container'>
            <h1 className='super title'>Get in touch</h1>
            <h2 className='super subtitle'>
              Power your future with imagination of the people who care about your product.
            </h2>
          </div>
        </div>
      </section>
  );

  return (
    <React.Fragment>
      <LoadingIntro />
      <Hero />
      <HelloThere />
      <The5Whats />
      <HolisticApproach />
      <Organizations />
      <Banner />
      <GetInTouchTitle/>
    </React.Fragment>
  )
});

