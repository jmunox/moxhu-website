import * as React from 'react'
import { view } from 'react-easy-state'
import classNames from 'classnames'
import ProfilePic from 'media/profile-circle.png'

import * as css from './MyIntro.scss'

export default view(() => {
  return (
    <section id="intro" class="pt-6">
      <section className="section has-background-white pt-6">
        <div className="container has-text-centered">
          <div className='columns is-vcentered is-centered is-desktop is-multiline'>
          <div className='column pb-5'>
          <img src={ProfilePic} />
          <h1 className="subtitle mt-5 is-2 has-text-weight-bold">
            Jesús Muñoz-Alcántara
      </h1>
            </div>
          <div className='column'>
            <div className='container ml-6 pt-6'>
            <div className={classNames('block')}>
              <div className={css.designLabel}><div className={classNames(css.design, css.labelTitle)}>design</div></div>
            </div>
            <div className={classNames('block')}>
              <div className={css.technologyLabel}><div className={classNames(css.technology, css.labelTitle)}>technology</div></div>
            </div>
            <div className={classNames('block')}>
              <div className={css.userResearchLabel}><div className={classNames(css.userResearch, css.labelTitle)}>user research</div></div>
            </div>
            </div>
          </div>
          </div>
        </div>
      </section>
      <section className='section has-background-dark has-text-light'>
        <div className='block is-hidden-desktop mt-6'></div>
          <div className='container has-text-left mx-6 mb-5'>
         <div className={classNames(css.subtitle)}>I combine <span className={css.designLabel}><span className={classNames(css.design, css.labelSubtitle)}>design</span></span> with <span className={css.technologyLabel}><span className={classNames(css.technology, css.labelSubtitle)}>technology</span></span> and <span className={css.userResearchLabel}><span className={classNames(css.userResearch, css.labelSubtitle)}>user research</span></span> to help you connect to the people you care about and create a future together.</div>
         <div className='block is-hidden-desktop mt-6'></div>
         <div className='pt-2'>
         <a className="button is-info">
              <span>About me</span>
              <span className="icon">
                <i className="fas fa-chevron-right"></i>
              </span>
            </a>
            </div>
         </div>
         <div className='block is-hidden-desktop mt-6'></div>
        </section>
      </section>
  )
})
