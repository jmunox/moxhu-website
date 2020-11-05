import * as React from 'react'
import { view } from 'react-easy-state'
import classNames from 'classnames'
import PicHolisticDesign from 'media/Holistic-Design-Research.svg';

import * as css from './MyIntro.scss'

export default view(() => {
  return (
    <section id="what-future" className="section has-background-white">
      <div className="container has-text-left my-4 mx-6">
        <div className='columns is-vcentered is-desktop is-multiline'>
          <div className='column'>
            <h1 className="title">
              Holistic Design Research
              </h1>
          </div>
          <div className='column has-text-centered'>
          <figure className="image has-image-center">
            <img className='is-rounded' style='max-width: 90%' src={PicHolisticDesign} />
            </figure>
          </div>
          <div className='column is-full'>
            <div className={classNames(css.subtitle)}>
            I use a holistic design research approach to inspire creativity, participation and collaboration in emerging tech communities.
              </div>
          </div>
          <div className='column'>
            <a className="button is-info">
              <span>Learn more</span>
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
