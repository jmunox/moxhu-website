import * as React from 'react';
import { view } from 'react-easy-state';
import classNames from 'classnames';
import ProfilePic from 'media/profile-circle.png';

import * as css from './Home.scss';

export default view(() => {
  return (
      <section className='section has-background-white py-6 my-6'>
        <div className='pt-6 mt-6'>
          <div className='container has-text-centered'>
            <div id='/home/intro' className='columns is-vcentered is-centered is-desktop is-multiline'>
              <div className='column pb-1'>
                <img className='profile-pic' src={ProfilePic} />
                <h1 className='super subtitle mt-3 has-text-weight-bold has-text-dark'>
                  Jesús Muñoz-Alcántara
                </h1>
              </div>
              <div className='column'>
                <div className='container px-4'>
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
        <div className='block is-hidden-touch mt-4'></div>
        <div className=''>
          <div className='container has-text-left py-5'>
            <p className='lead' style={{ lineHeight: '1.5' }}>
              If you are looking for how to combine <span className={css.designLabel}><span className={classNames(css.design, css.labelLead, 'has-text-weight-bold')}>design</span>
              </span> with <span className={css.technologyLabel}><span className={classNames(css.technology, css.labelLead, 'has-text-weight-bold')}>technology</span></span> and <span className={css.userResearchLabel}><span className={classNames(css.userResearch, css.labelLead, 'has-text-weight-bold')}>user research</span></span> to nurture
              <span className={'has-text-black has-text-weight-bold'}> <span className='is-super-underlined'>plural experiences</span></span> that future-proof your business.
              <span className={'has-text-black has-text-weight-bold'}> You are in the right place!</span>
            </p>
            <br/>
            <p  className='lead'>
                I am a designer and researcher from the sunny side of México. I make my own ice-cream <span className='icon'><i class="fas fa-ice-cream"></i></span>.</p> 
            <p  className='lead'>
                I live in the Netherlands, in the city of Eindhoven: the most innovative city in the world.
            </p>
            <div className='columns is-mobile mt-1'>
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
