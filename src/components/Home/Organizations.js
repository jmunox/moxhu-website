import * as React from 'react';
import { view } from 'react-easy-state';

export default view(() => {
  return (
    <section id='organizations' className='section has-background-dark'>
        <div className='container has-text-left pb-5'>
          <h1 className='super subtitle has-text-primary-light'>Some organizations I've worked with in the last 10+ years, accross Europe &amp; Latin America:</h1>
        </div>
        <div className=''>
          <div className='container lead has-text-centered'>
            <div className='columns is-centered is-mobile is-multiline'>
              <div className='column py-4 is-one-third'>
                <h2 className='has-text-primary-light'>ASML</h2>
              </div>
              <div className='column py-4 is-one-third'>
                <h2 className='has-text-primary-light'>Eindhoven University of Technology</h2>
              </div>
              <div className='column py-4 is-one-third'>
                <h2 className='has-text-primary-light'>Atos Spain</h2>
              </div>
              <div className='column py-4 is-one-third'>
                <h2 className='has-text-primary-light'>The Robert Gordon University</h2>
              </div>
              <div className='column py-4 is-one-third'>
                <h2 className='has-text-primary-light'>Universiteit Hasselt</h2>
              </div>
              <div className='column py-4 is-one-third'>
                <h2 className='has-text-primary-light'>Fundación Virtualware Labs</h2>
              </div>
              <div className='column py-4 is-one-third'>
                <h2 className='has-text-primary-light'>Peerby</h2>
              </div>
              <div className='column py-4 is-one-third'>
                <h2 className='has-text-primary-light'>Intrasoft</h2>
              </div>
              <div className='column py-4 is-one-third'>
                <h2 className='has-text-primary-light'>Norwich University of Arts</h2>
              </div>
              <div className='column py-4 is-one-third'>
                <h2 className='has-text-primary-light'>DesignLab.gr</h2>
              </div>
              <div className='column py-4 is-one-third'>
                <h2 className='has-text-primary-light'>Telcel</h2>
              </div>
              <div className='column py-4 is-one-third'>
                <h2 className='has-text-primary-light'>Claro Americas</h2>
              </div>
            </div>
          </div>
          <div className='container pt-6'>
            <a className='button is-size-5-desktop is-white'
                href="/work">
                <span className=''>Get to know my work</span>
              </a>
          </div>
        </div>
    </section>
  )
});
