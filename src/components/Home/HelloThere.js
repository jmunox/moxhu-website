import * as React from 'react';
import { view } from 'react-easy-state';
import classNames from 'classnames';
import ProfilePic from 'media/profile-circle.png';

import * as css from './Home.scss';

export default view(() => {
  return (
    <section class='mt-6'>
      <section className='section has-background-white'>
        <div className='mx-6'>
          <div className='container has-text-centered pl-3'>
            <div id='intro' className='columns is-vcentered is-centered is-desktop is-multiline'>
              <div className='column pb-5'>
                <img src={ProfilePic} />
                <h1 className='subtitle mt-5 has-text-weight-bold'>
                  Jesús Muñoz-Alcántara
              </h1>
              <a className='subtitle button mt-4 is-4'
              onClick={
                (event) => {
                  event.preventDefault();
                  document.getElementById('/home/contact').scrollIntoView({ behavior: 'smooth', block: 'start' })
                }}>
                <span>Contact</span>
              </a>
              </div>
              <div className='column'>
                <div className='container ml-6 pt-4'>
                  <div className={classNames('block')}>
                    <div className={css.designLabel}><div className={classNames(css.design, css.labelTitle)}>design</div></div>
                  </div>
                  <div className={classNames('block')}>
                    <div className={css.technologyLabel}><div className={classNames(css.technology, css.labelTitle)}>technology</div></div>
                  </div>
                  <div className={classNames('block')}>
                    <div className={css.userResearchLabel}><div className={classNames(css.userResearch, css.labelTitle)}>user research</div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='section has-background-white'>
        <div className='block is-hidden-desktop mt-6'></div>
        <div className='mx-6'>
          <div className='container has-text-left pl-3 mb-5'>              
          <p  className='subtitle my-5'>
                I am a designer and researcher from the sunny side of México, living the Netherlands: in the city of Eindhoven, the most innovative city in the world.
              </p>
            <p className='subtitle has-text-dark' style={{ lineHeight: '1.5' }}>
              I combine <span className={css.designLabel}><span className={classNames(css.design, css.labelSubtitle, 'has-text-weight-bold')}>design</span>
              </span> with <span className={css.technologyLabel}><span className={classNames(css.technology, css.labelSubtitle, 'has-text-weight-bold')}>technology</span></span> and <span className={css.userResearchLabel}><span className={classNames(css.userResearch, css.labelSubtitle, 'has-text-weight-bold')}>user research</span></span> to help you connect to the people you care about and create a future together.
            </p>
            <div className='block mt-6'></div>
            <div className='pt-2'>
              <a className='button is-large is-purple'
                onClick={
                  (event) => {
                    event.preventDefault();
                    document.getElementById('organizations').scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }}>
                <span>Learn more about my work</span>
                <span className='icon'>
                  <i className='fas fa-chevron-down'></i>
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className='block is-hidden-desktop mt-6'></div>
      </section>
    </section>
  )
});
