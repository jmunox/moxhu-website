import * as React from 'react';
import { view } from 'react-easy-state';
import classNames from 'classnames';
import PicHolisticDesign from 'media/Holistic-Design-Research.png';
import MyJourney from 'media/my-journey-01.svg';

import * as css from './Home.scss';

export default view(() => {
  return (
    <React.Fragment>
    <section id='/home/my-approach' className='section has-background-white'>
    <div className='pt-6 mt-6'>
          <div className='container has-text-left'>    
            <h1 className='title is-size-2 has-text-dark'>I have been on a discovery journey on how to generate <span className='has-text-black has-text-weight-bold'>inclusive</span>, <span className='has-text-black has-text-weight-bold'>connected</span> and <span className='has-text-black has-text-weight-bold'>plural experiences</span> through technology.</h1>
          </div>
        </div>
      <div className='container has-text-left'>
        <div className='columns is-vcentered is-desktop is-multiline'>
          <div className='column is-full'>
            <div className='lead has-text-left content'>
                  <p style={{ lineHeight: '1.5' }}>Along the way, I have learnt a lot of different skills that give a holistic approach towards nature-human-technology relationships.</p>
            </div> 
          </div>
          <div className='column has-text-centered'>
            <figure className='image has-image-center'>
              <img style='max-width: 100%' src={MyJourney} />
            </figure>
          </div>
        </div>
      </div>
    </section>
    </React.Fragment>
  )
});