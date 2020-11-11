import * as React from 'react'
import { view } from 'react-easy-state'
import VisionPic from 'media/noun_Astronaut_2909362.png'

export default view(() => {
  return (
    <section id="what-future" className="section has-background-white">
      <div className="container has-text-left pl-3 my-4 mx-6">
        <div className='columns is-vcentered is-desktop is-multiline'>
          <div className='column is-half-desktop'>
            <h1 className="title">
              What is the future that you want to create?
              </h1>
          </div>
          <div className='column is-half-desktop'>
          <figure className="image has-text-center">
            <img style='max-width: 100%' src={VisionPic} />
            </figure>
          </div>
          <div className='column is-full'>
            <div className='subtitle'>
              Let me help you envision how people experience your product and bring that vision to life.
              </div>
          </div>
          <div className='column'>
            <a className="button is-large is-purple"
            onClick={
              (event) => {
                event.preventDefault(); 
                document.getElementById('the-5-whats').scrollIntoView({ behavior: 'smooth', block: 'start' })
            }}>
              <span>Let's get started</span>
              <span className="icon">
                <i className="fas fa-chevron-down"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
})
