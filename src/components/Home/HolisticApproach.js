import * as React from 'react';
import { view } from 'react-easy-state';
import PicHolisticDesign from 'media/Holistic-Design-Research.png';

export default view(() => {
  return (
    <React.Fragment>
    <section className='section has-background-dark'>
      <div className=''>
        <div className='container has-text-left my-3'>
            <h1 className='title is-size-2 my-5 has-text-primary-light'>The way I work:</h1>
            <h2 className='super subtitle my-5 has-text-primary-light'>A co-creative design mindset to answer your most challenging questions.</h2>
        </div>
      </div>
    </section>
    <section id='my-approach' className='section has-background-white'>
    <div className='py-5 mt-5'>
      <div className='container has-text-left'>
        <div className='columns is-vcentered is-desktop is-multiline'>
          <div className='column'>
            <h1 className='super title'>
              Holistic Design Research
              </h1>
          </div>
          <div className='column has-text-centered'>
            <figure className='image has-image-center'>
              <img className='is-rounded' style='max-width: 60%' src={PicHolisticDesign} />
            </figure>
          </div>
          <div className='column is-full'>
            <div className='lead pb-3'>
            I use a <u>holistic design research</u> approach to drive creativity, participation and collaboration in emerging tech communities.
            <br/>
            </div>
            <div className='lead'>
            My design process creates communities that care about your business, while innovating the user experience of your product along the way.  
            </div>
          </div>
          <div className='column'>
            <a className='button is-purple is-size-5-desktop'
            onClick={
              (event) => {
                event.preventDefault(); 
                document.getElementById('/home/contact').scrollIntoView({ behavior: 'smooth', block: 'start' })
            }}>
              <span>Let's talk</span>
              <span className='icon'>
                <i className='fas fa-chevron-down'></i>
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