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
    <section className='section has-background-dark'>
      <div className='mx-6'>
        <div className='container pl-3'>
          <h1 className='title is-1 has-text-light'>Get in touch</h1>
          <h2 className='subtitle has-text-primary-light'>
            Change how people connect to your business and your product.
          </h2>
        </div>
      </div></section>
  )
});