import * as React from 'react';
import { view } from 'react-easy-state';
import classNames from 'classnames';
import ProfilePic from 'media/profile-circle.png';

import * as css from './Home.scss';

export default view(() => {
  return (
      <section className='section has-background-white py-6 my-6'>
        <div id='/home/intro' className='pt-6 mt-6'>
          <div className='container has-text-centered'>
            <div className='columns is-vcentered is-centered is-desktop is-multiline'>
              <div className='column is-half-desktop pb-1'>
                <img className='profile-pic' src={ProfilePic} />
                <h1 className='super subtitle mt-3 has-text-weight-bold has-text-dark'>
                  Jesús Muñoz-Alcántara.
                </h1>
              </div>
              <div className='column is-half-desktop'>
                <div className='container px-4'>
                  <div className={classNames('block')}>
                    <div className={css.technologyLabel}><div className={classNames(css.technology, css.labelTitle)}>generative</div></div>
                  </div>
                  <div className={classNames('block')}>
                    <div className={css.designLabel}><div className={classNames(css.design, css.labelTitle)}>design</div></div>
                  </div>
                  <div className={classNames('block')}>
                    <div className={css.userResearchLabel}><div className={classNames(css.userResearch, css.labelTitle)}>research</div></div>
                  </div>
                </div>
          </div>
              <div className='column is-full'>
                <div className='lead has-text-left content'>
                  <p>If you are looking for how to envision the experience of your product and bring that vision to life.
                  <span className='has-text-black has-text-weight-bold'> You are in the right place!</span>
                  </p>
                  <p style={{ lineHeight: '1.5' }}>Hey there, I am Jesús. I help emerging tech communities to <span className='has-text-black has-text-weight-bold is-pink-underlined'>future-proof</span> their products by generating <span className='has-text-black has-text-weight-bold'>inclusive</span>, <span className='has-text-black has-text-weight-bold'>connected</span> and <span className='has-text-black has-text-weight-bold'>plural experiences</span>.</p>
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
                    document.getElementById('/home/what-future').scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }}>
                <span>Learn more</span>
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
