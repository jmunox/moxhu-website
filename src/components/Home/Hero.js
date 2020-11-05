import * as React from 'react'
import classNames from 'classnames'

import * as css from './Hero.scss'

export default () => {
  return (
      <section className="hero is-fullheight-with-navbar is-bold has-text-grey has-background is-dark">
        <img alt="" className="hero-background is-transparent is-mobile is-hidden" src="/media/sunset.gif" />

        <div className="hero-head">
          <div className="container">
          </div>
        </div>
        <div className="hero-body">
          <div className="container mx-6">
            <h1 className="title has-text-primary-light">
              Power your future <br /> with the people <br /> who love <br />your product.
        </h1>
            <h2 className="subtitle has-text-primary-light pt-6 is-3">
              Bring user experience at the forefront.
      </h2>
            <a className="button is-black ">
              <span className="">Discover how</span>
              <span className="icon">
                <i className="fas fa-chevron-right"></i>
              </span>
            </a>
          </div>
        </div>
      </section>
  )
}
