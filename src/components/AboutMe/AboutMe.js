import * as React from 'react';
import { view } from 'react-easy-state';
import ProfilePic from 'media/profile-circle.png';

export default view(() => {
  return (
    <section id='/home/contact' className='section has-background-white mx-6'>
      <div className='container has-text-left px-3 my-4'>
          <div className='columns is-vcentered is-centered is-desktop is-multiline'>
            <div className='column pb-5 has-text-centered'>
              <img src={ProfilePic} />
              <h1 className='subtitle mt-5 has-text-weight-bold'>
                Jesús Muñoz-Alcántara
              </h1>
              <a href='mailto:info@moxhu.com' className='subtitle button mt-5 is-4'>
                <span className='icon'>
                  <i className='far fa-envelope'></i>
                </span>
                <span>info[at]moxhu.com</span>
              </a>
            </div>
            <div className='column is-full '>
              <div className='subtitle mt-5'>
              I am on a mission to <b>lead pluriversality</b> in the design process <b>and inspire</b> a new definition of <b>creative power</b> that is <b>based on freedom, partnership and participation</b>.
              </div>
            </div>
          </div>
      </div>
    </section>
  )
});
