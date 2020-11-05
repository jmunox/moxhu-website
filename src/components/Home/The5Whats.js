import * as React from 'react'
import { view } from 'react-easy-state'
import classNames from 'classnames'
import PicWhat1 from 'media/noun_networking_2909312.png'
import PicWhat2 from 'media/noun_Brainstorm_2909385.png'
import PicWhat3 from 'media/noun_success_2909316.svg'
import PicWhat4 from 'media/noun_startup_2909309.png'
import PicWhat5 from 'media/noun_collaboration_2909353.png'

import * as css from './MyIntro.scss'

export default view(() => {
  return (
    <section id="the-5-whats" className="section has-background-white">
      <div className="container has-text-left my-4 mx-6">
        <h1 className='title is-1 my-6'>Your path to greatness:</h1>
        <div className='columns is-vcentered is-desktop is-multiline'>
          <div className='column is-half-desktop pt-6 mt-6'>
            <h1 className="title">
              Curiousity: questions as a way to connect
              </h1>
          </div>
          <div className='column is-half-desktop'>
            <figure className="image has-text-center">
              <img className='is-rounded' style='max-width: 80%' src={PicWhat1} />
            </figure>
          </div>
          <div className='column is-full'>
            <div className={classNames(css.subtitle)}>
            Do you know what is going on with your customers?<br/><br className='is-hidden-desktop'/>  
            Asking questions is the starting point to bridge the gap between your users and your business.
              </div>
          </div>
          <div className='column is-full pb-6 mb-6'>
            <a className="button is-info">
              <span>Tune with the people you care about</span>
              <span className="icon">
                <i className="fas fa-chevron-right"></i>
              </span>
            </a>
          </div>
          <div className='column is-half-desktop pt-6 mt-6'>
            <h1 className="title">
              Design with people for people
              </h1>
          </div>
          <div className='column is-half-desktop has-text-centered'>
            <figure className="image" > 
              <img className='is-rounded' style='max-width: 80%;' src={PicWhat2} />
            </figure>
          </div>
          <div className='column is-full'>
            <div className={classNames(css.subtitle)}>
            Do you know what is important for your users?<br/><br className='is-hidden-desktop'/>
            Empathize with their wishes. Empower your users to build a meaningful connection with your product.
              </div>
          </div>
          <div className='column is-full pb-6 mb-6'>
            <a className="button is-info">
              <span>Grow participation of your users</span>
              <span className="icon">
                <i className="fas fa-chevron-right"></i>
              </span>
            </a>
          </div>
          <div className='column is-half-desktop pt-6 mt-6'>
            <h1 className="title">
            Create together, rise together
              </h1>
          </div>
          <div className='column is-half-desktop'>
            <figure className="image has-text-center">
              <img className='is-rounded' style='max-width: 80%' src={PicWhat3} />
            </figure>
          </div>
          <div className='column is-full'>
            <div className={classNames(css.subtitle)}>
            What are the possible solutions?<br/><br className='is-hidden-desktop'/>
            The future of your business is limited by your imagination and by the imagination of your customers. Collaboration is king.
              </div>
          </div>
          <div className='column is-full pb-6 mb-6'>
            <a className="button is-info">
              <span>Live with a superpower</span>
              <span className="icon">
                <i className="fas fa-chevron-right"></i>
              </span>
            </a>
          </div>
          <div className='column is-half-desktop pt-6 mt-6'>
            <h1 className="title">
            Prototyping mindset, learning through doing
              </h1>
          </div>
          <div className='column is-half-desktop'>
            <figure className="image has-text-center">
              <img className='is-rounded' style='max-width: 80%' src={PicWhat4} />
            </figure>
          </div>
          <div className='column is-full'>
            <div className={classNames(css.subtitle)}>
            What is the best fit for your customer?<br/><br className='is-hidden-desktop'/>
            Transform uncertainty into opportunities to solve your challenges. Research, prototype, pilot, scale, iterate.
              </div>
          </div>
          <div className='column is-full pb-6 mb-6'>
            <a className="button is-info">
              <span>Start learning and start leading</span>
              <span className="icon">
                <i className="fas fa-chevron-right"></i>
              </span>
            </a>
          </div>
          <div className='column is-half-desktop pt-6 mt-6'>
            <h1 className="title">
            Feedback is your opportunity to grow
              </h1>
          </div>
          <div className='column is-half-desktop'>
            <figure className="image has-text-center">
              <img className='is-rounded' style='max-width: 80%' src={PicWhat5} />
            </figure>
          </div>
          <div className='column is-full'>
            <div className={classNames(css.subtitle)}>
            How can your product be improved? <br/><br className='is-hidden-desktop'/>
            Meet face-to-face the problems of your users. Move the decision making closer to your users.
              </div>
          </div>
          <div className='column is-full pb-5'>
            <a className="button is-info">
              <span>Change how people feel about your product</span>
              <span className="icon">
                <i className="fas fa-chevron-right"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
})
