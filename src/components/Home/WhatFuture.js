import * as React from 'react';
import { view } from 'react-easy-state';
import VisionPic from 'media/noun_Astronaut_2909362.png';

export default view(() => {
  return (
    <section className='section has-background-white'>
      <div className='py-6 my-6'>
        <div id='/home/what-future' className='container has-text-left'>
          <div className='columns is-vcentered is-mobile is-multiline'>
            <div className='column is-half-desktop is-full-touch'>
              <h1 className='super title'>
                What is the future that you want to create?
              </h1>
            </div>
            <div className='column is-half-desktop'>
              <figure className='image has-text-center'>
                <img style='max-width: 70%' src={VisionPic} />
              </figure>
            </div>
            <div className='column is-full'>
              <div className='lead'>
                Let me help you envision how people experience your product and bring that vision to life.
              </div>
            </div>
            <div className='column is-narrow pb-2'>
              <a className='button is-purple is-size-5-desktop'
                  onClick={
                    (event) => {
                      event.preventDefault();
                      document.getElementById('/home/services').scrollIntoView({ behavior: 'smooth', block: 'start' })
                    }}>
                    <span>Services</span>
                    <span className='icon'>
                      <i className='fas fa-chevron-down'></i>
                    </span>
              </a>
            </div>
            <div className='column is-narrow pb-2'>
              <a className='is-hidden button is-dark is-outlined is-size-5-desktop'
                onClick={
                  (event) => {
                    event.preventDefault();
                    document.getElementById('what-1').scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }}>
                <span>Check my work</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
});
