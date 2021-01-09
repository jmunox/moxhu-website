import * as React from 'react';
import { view } from 'react-easy-state';
import ProfilePic from 'media/profile-circle.png';

export default view(() => {
  return (
    <section id='/home/contact' className='section has-background-white pt-5'>
      <div className='container has-text-left has-text-dark'>
          <div className='columns is-vcentered is-centered is-desktop is-multiline'>
            <div className='column pb-4 has-text-centered'>
              <img className='profile-pic' src={ProfilePic} />
              <h1 className='super subtitle mt-3 has-text-weight-bold'>
                Jesús Muñoz-Alcántara
              </h1>
              <a href='mailto:info@moxhu.com' className='button is-dark is-outlined is-size-5-desktop'>
                <span className='icon'>
                  <i className='far fa-envelope'></i>
                </span>
                <span>info[at]moxhu.com</span>
              </a>
            </div>
            <div className='column is-full'>
              <div className='lead'>
              I am on a mission to <b>lead pluriversality</b> in the design process <b>and drive</b> a new definition of <b>creative power</b> that is <b>based on freedom, partnership and participation</b>.
              </div>
            </div>
          </div>
      </div>
    </section>
  )
});
