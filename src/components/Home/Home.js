import * as React from 'react'
import { view } from 'react-easy-state'
import Hero from './Hero';
import MyIntro from './MyIntro';
import WhatFuture from './WhatFuture';
import The5Whats from './The5Whats';
import HolisticApproach from './HolisticApproach';
import AboutMe from './AboutMe';
import classNames from 'classnames'

import PicBanner from 'media/linked-in-banner.png'


import * as css from './Home.scss'

export default view(() => {
  return (
    <React.Fragment>
      <Hero/>
      <MyIntro/>
      <WhatFuture/>
      <The5Whats/>
      <HolisticApproach/> 
      <section>
        <img src={PicBanner} />
      </section>
      <AboutMe/>
    </React.Fragment>
  )
})
