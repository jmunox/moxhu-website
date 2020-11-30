import * as React from 'react';
import { view } from 'react-easy-state';

export default view(() => {
  return (
    <section id='organizations' className='section has-background-dark py-6'>
      <div className='mx-6'>
        <div className='container has-text-left pl-3 my-4'>
          <h1 className='title is-1 has-text-white'>Some organizations I've worked with in the last 10+ years (Europe &amp; Latin America):</h1>
        </div>
      </div>
      <section className='section'>
        <div className='mx-6'>
          <div className='container has-text-centered pt-5 pl-3'>
            <div className='columns is-centered is-mobile is-multiline'>
              <div className='column pb-6 is-3'>
                <h2 className='subtitle has-text-grey-lighter'>Atos Spain</h2>
              </div>
              <div className='column pb-6 is-3'>
                <h2 className='subtitle has-text-grey-lighter'>ASML</h2>
              </div>
              <div className='column pb-6 is-3'>
                <h2 className='subtitle has-text-grey-lighter'>The Robert Gordon University</h2>
              </div>
              <div className='column pb-6 is-3'>
                <h2 className='subtitle has-text-grey-lighter'>Universiteit Hasselt</h2>
              </div>
              <div className='column pb-6 is-3'>
                <h2 className='subtitle has-text-grey-lighter'>Fundación Virtualware Labs</h2>
              </div>
              <div className='column pb-6 is-3'>
                <h2 className='subtitle has-text-grey-lighter'>Peerby</h2>
              </div>
              <div className='column pb-6 is-3'>
                <h2 className='subtitle has-text-grey-lighter'>Intrasoft</h2>
              </div>
              <div className='column pb-6 is-3'>
                <h2 className='subtitle has-text-grey-lighter'>Norwich University of Arts</h2>
              </div>
              <div className='column pb-6 is-3'>
                <h2 className='subtitle has-text-grey-lighter'>DesignLab.gr</h2>
              </div>
              <div className='column pb-6 is-3'>
                <h2 className='subtitle has-text-grey-lighter'>Telcel</h2>
              </div>
              <div className='column pb-6 is-3'>
                <h2 className='subtitle has-text-grey-lighter'>Eindhoven University of Technology</h2>
              </div>
              <div className='column pb-6 is-3'>
                <h2 className='subtitle has-text-grey-lighter'>Claro Americas</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
        <div className='mx-6'>
          <div className='container pl-3'>
            <div className='pt-2'>
              <a className='button is-large is-purple'
                onClick={
                  (event) => {
                    event.preventDefault();
                    document.getElementById('what-future').scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }}>
                <span>Explore your path to greatness</span>
                <span className='icon'>
                  <i className='fas fa-chevron-down'></i>
                </span>
              </a>
            </div>
          </div>
        </div>
    </section>
  )
});
