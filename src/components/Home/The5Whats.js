import * as React from 'react';
import { view } from 'react-easy-state';
import classNames from 'classnames';
import PicWhat1 from 'media/noun_networking_2909312.svg';
import PicWhat2 from 'media/noun_Brainstorm_2909385.svg';
import PicWhat3 from 'media/noun_success_2909316.svg';
import PicWhat4 from 'media/noun_startup_2909309.svg';
import PicWhat5 from 'media/noun_collaboration_2909353.svg';

import * as css from './Home.scss';

export default view(() => {
  return (
    <React.Fragment>
      <section className='section has-background-white'>
        <div className='mx-6'>
          <div className='container has-text-left pl-3'>    
            <h1 className='title is-1 has-text-dark'>Your path to greatness in 5 steps:</h1>
          </div>
        </div>
      </section>
      <section id='the-5-whats' className='section has-background-white'>
        <div className='mx-6'>
          <div className='container has-text-left pl-3 mb-4'>
            <div className='columns is-vcentered is-desktop is-multiline'>
              <div id='what-1' className={classNames('column is-half-desktop py-6', css.hasUserResearchBackground)}>
                <h1 className='title'>
                  1. Curiousity: questions as a way to connect
                </h1>
              </div>
              <div className='column is-half-desktop'>
                <figure className='image'>
                  <img style='max-width: 75%' src={PicWhat1} />
                </figure>
              </div>
              <div className='column is-full'>
                <div className='subtitle mt-2'>
                  Do you know what is going on with your customers?
                </div>
                <div className='subtitle'>
                  Asking questions is the starting point to bridge the gap between your users and your business.
                </div>
              </div>
              <div className='column is-full pb-6 mb-6'>
                <a className='button is-large is-purple'
                  onClick={
                    (event) => {
                      event.preventDefault();
                      document.getElementById('what-2').scrollIntoView({ behavior: 'smooth', block: 'start' })
                    }}>
                  <span>Tune in with the people you care about&nbsp;</span>
                  <span className='icon'>
                    <i className='fas fa-check-circle'></i>
                  </span>
                </a>
              </div>
              <div id='what-2' className={classNames('column is-half-desktop py-6 mt-6', css.hasDesignBackground)}>
                <h1 className='title'>
                  2. Design with people for people
                </h1>
              </div>
              <div className='column is-half-desktop'>
                <figure className='image' >
                  <img style='max-width: 70%;' src={PicWhat2} />
                </figure>
              </div>
              <div className='column is-full'>
                <div className='subtitle mt-2'>
                  Do you know what is important for your users?
                </div>
                <div className='subtitle'>
                  Empathize with their wishes. Empower your users to build a meaningful connection with your product.
                </div>
              </div>
              <div className='column is-full pb-6 mb-6'>
                <a className='button is-large is-purple'
                  onClick={
                    (event) => {
                      event.preventDefault();
                      document.getElementById('what-3').scrollIntoView({ behavior: 'smooth', block: 'start' })
                    }}>
                  <span>Grow participation of your users&nbsp;</span>
                  <span className='icon'>
                    <i className='fas fa-check-circle'></i>
                  </span>
                </a>
              </div>
              <div id='what-3' className={classNames('column is-half-desktop py-6 mt-6', css.hasDesignBackground)}>
                <h1 className='title'>
                  3. Create together, rise together
                </h1>
              </div>
              <div className='column is-half-desktop'>
                <figure className='image'>
                  <img style='max-width: 70%' src={PicWhat3} />
                </figure>
              </div>
              <div className='column is-full'>
                <div className='subtitle mt-2'>
                  What are the possible solutions?
                </div>
                <div className='subtitle'>
                  The future of your business is limited by your imagination and by the imagination of your customers. Collaboration is queen.
                </div>
              </div>
              <div className='column is-full pb-6 mb-6'>
                <a className='button is-large is-purple'
                  onClick={
                    (event) => {
                      event.preventDefault();
                      document.getElementById('what-4').scrollIntoView({ behavior: 'smooth', block: 'start' })
                    }}>
                  <span>Live with a superpower&nbsp;</span>
                  <span className='icon'>
                    <i className='fas fa-check-circle'></i>
                  </span>
                </a>
              </div>
              <div id='what-4' className={classNames('column is-half-desktop py-6 mt-6', css.hasTechnologyBackground)}>
                <h1 className='title'>
                  4. Prototyping mindset, learning through doing
                </h1>
              </div>
              <div className='column is-half-desktop has-text-centered'>
                <figure className='image'>
                  <img style='max-width: 75%' src={PicWhat4} />
                </figure>
              </div>
              <div className='column is-full'>
                <div className='subtitle mt-2'>
                  What is the best fit for your customer?
                </div>
                <div className='subtitle'>
                  Transform uncertainty into opportunities to solve your challenges. Research, prototype, pilot, scale, iterate.
                </div>
              </div>
              <div className='column is-full pb-6 mb-6'>
                <a className='button is-large is-purple'
                  onClick={
                    (event) => {
                      event.preventDefault();
                      document.getElementById('what-5').scrollIntoView({ behavior: 'smooth', block: 'start' })
                    }}>
                  <span>Start learning and start leading&nbsp;</span>
                  <span className='icon'>
                    <i className='fas fa-check-circle'></i>
                  </span>
                </a>
              </div>
              <div id='what-5' className={classNames('column is-half-desktop py-6 mt-6', css.hasUserResearchBackground)}>
                <h1 className='title'>
                  5. Feedback is your opportunity to grow
                </h1>
              </div>
              <div className='column is-half-desktop'>
                <figure className='image'>
                  <img style='max-width: 80%' src={PicWhat5} />
                </figure>
              </div>
              <div className='column is-full'>
                <div className='subtitle mt-2'>
                  How can your product be improved?
                </div>
                <div className='subtitle'>
                  Meet face-to-face the problems of your users. Move the decision making closer to your users.
                </div>
              </div>
              <div className='column is-full pb-5'>
                <a className='button is-large is-purple'
                  onClick={
                    (event) => {
                      event.preventDefault();
                      document.getElementById('my-approach').scrollIntoView({ behavior: 'smooth', block: 'start' })
                    }}>
                  <span>Change how people feel about your product&nbsp;</span>
                  <span className='icon'>
                    <i className='fas fa-check-circle'></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
});
