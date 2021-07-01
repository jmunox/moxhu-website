import * as React from 'react';
import { view } from 'react-easy-state';
import classNames from 'classnames';
import PicHolisticDesign from 'media/Holistic-Design-Research.png';
import PicGenDesign from 'media/gen-design-method-black.svg';

import * as css from './Home.scss';

export default view(() => {
  return (
    <React.Fragment>
    <section id='my-approach' className='section has-background-white'>
      <div className='container has-text-left'>
        <div className='columns is-vcentered is-desktop is-multiline'>
          <div className='column has-text-centered'>
            <figure className='image has-image-center'>
              <img className='is-rounded' style='max-width: 50%' src={PicGenDesign} />
            </figure>
          </div>
        </div>
      </div>
    </section>
    </React.Fragment>
  )
});