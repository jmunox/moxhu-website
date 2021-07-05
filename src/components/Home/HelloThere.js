import * as React from 'react';
import { view } from 'react-easy-state';
import classNames from 'classnames';
import VisionPic from 'media/noun_Astronaut_2909362.png';
import ProfilePic from 'media/profile-circle.png';

import * as css from './Home.scss';

export default view(() => {
  return (
      <section className='section has-background-white py-6 my-6'>
        <div id='/home/intro' className='pt-6 mt-6'>
          <div className='container has-text-centered'>
            <div className='columns is-vcentered is-centered is-desktop is-multiline'>
              <div className='column is-half-desktop is-full-touch'>
                <h1 className='super title has-text-left'>
                  What is the future that you want to create?
                </h1>
              </div>
              <div className='column is-half-desktop'>
              <img className='profile-pic' src={ProfilePic} />
            </div>
              <div className='column mt-4 is-full'>
                <div className='lead has-text-left content'>
                  <p>If you are looking for how to envision the experience of your product and bring that vision to life.
                  <span className='has-text-black has-text-weight-bold'> You are in the right place!</span>
                  </p>
                  <p style={{ lineHeight: '1.5' }}>Hey there, I am Jesús. 
                  I help emerging tech communities to <span className='has-text-black has-text-weight-bold is-pink-underlined'>future-proof</span> their products through <span className={css.technologyLabel}><span className={classNames(css.technology, css.labelLead, 'has-text-weight-bold')}>generative</span></span> <span className={css.designLabel}><span className={classNames(css.design, css.labelLead, 'has-text-weight-bold')}>design</span>
              </span> <span className={css.userResearchLabel}><span className={classNames(css.userResearch, css.labelLead, 'has-text-weight-bold')}>research</span></span>. My practice focuses on bringing collective creativity to the forefront of business decisions.</p>
                </div>
              </div>
            </div>
          </div>
          <div className='container has-text-left'>
            <div className='columns is-mobile mt-2'>
              <div className='column is-narrow'>
              <a className='button is-size-5-desktop is-purple'
                onClick={
                  (event) => {
                    event.preventDefault();
                    document.getElementById('/home/work').scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }}>
                <span>Check my work</span>
                <span className='icon'>
                  <i className='fas fa-chevron-down'></i>
                </span>
              </a>
              </div>
              <div className='column is-narrow pb-2'>
              <a className='button is-dark is-outlined is-size-5-desktop'
                  onClick={
                    (event) => {
                      event.preventDefault();
                      document.getElementById('/home/contact').scrollIntoView({ behavior: 'smooth', block: 'start' })
                    }}>
                    <span>Contact</span>
              </a>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
});
