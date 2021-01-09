import * as React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { view } from 'react-easy-state';

export default view(() => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <section className='hero is-bold has-text-grey is-dark'>
      <div className='hero-body'>
        <div className='container'>
          <h1 className='super title has-text-primary-light'>Let's talk</h1>
          <h2 className='super subtitle has-text-primary-light'>
            Change how people feel about your product and your business.
          </h2>
        </div>
      </div></section>
  )
});