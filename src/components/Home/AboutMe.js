import * as React from 'react'
import { view } from 'react-easy-state'
import classNames from 'classnames'
import ProfilePic from 'media/profile-circle.png'

import * as css from './MyIntro.scss'

export default view(() => {
  return (
    <section id="what-future" className="section has-background-white">
      <div className="container has-text-left my-4 mx-6">
        <div className='columns is-vcentered is-centered is-desktop is-multiline'>
        <div className='column pb-5 has-text-centered'>
          <img src={ProfilePic} />
          <h1 className="subtitle mt-5 is-2 has-text-weight-bold">
            Jesús Muñoz-Alcántara
      </h1>
      <h2 className="subtitle mt-5 is-3">
            info[at]moxhu[dot]com
      </h2>
            </div>
          <div className='column is-half-desktop '>
          <div className="subtitle mt-5 mx-4 is-3">
            I am a designer and researcher from the sunny side of México, living in Eindhoven, the most innovative city in the world. 
              </div>
          </div>
          <div className='column is-full mt-5'>
            <div className="subtitle mt-5 is-3">
            I am on a mission to lead pluriversality in the design process and inspire a new definition of creative power that is based on freedom, partnership and participation.
              </div>
          </div>
        </div>
      </div>
    </section>
  )
})
