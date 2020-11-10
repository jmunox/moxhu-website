import * as React from 'react'
import { view } from 'react-easy-state'
import PicHolisticDesign from 'media/Holistic-Design-Research.svg';

export default view(() => {
  return (
    <React.Fragment>
    <section className='section has-background-dark'>
    <div className="container has-text-left pl-3 my-4 mx-6">
      <h1 className='title is-1 my-5 has-text-white'>The way I work:</h1>
      </div>
    </section>
    <section id="my-approach" className="section has-background-white">
      <div className="container has-text-left pl-3 my-4 mx-6">
        <div className='columns is-vcentered is-desktop is-multiline'>
          <div className='column'>
            <h1 className="title">
              Holistic Design Research
              </h1>
          </div>
          <div className='column has-text-centered'>
          <figure className="image has-image-center">
            <img className='is-rounded' style='max-width: 60%' src={PicHolisticDesign} />
            </figure>
          </div>
          <div className='column is-full'>
            <div className='subtitle is-2 pb-3'>
            I use a <u>holistic design research</u> approach to inspire creativity, participation and collaboration in emerging tech communities.
            <br/>
            </div>
            <div className='subtitle is-2'>
            I create communities that care about your business, and innovate the user experience of your product along the way.  
              </div>
          </div>
          <div className='column'>
            <a className="button is-large is-purple"
            onClick={
              (event) => {
                event.preventDefault(); 
                document.getElementById('contact').scrollIntoView({ behavior: 'smooth', block: 'start' })
            }}>
              <span>Let's talk</span>
              <span className="icon">
                <i className="fas fa-chevron-right"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
    </React.Fragment>
  )
})
