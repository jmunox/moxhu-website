import * as React from 'react';
import { view } from 'react-easy-state';
import classNames from 'classnames';
import { motion } from 'framer-motion';

import * as css from './LoadingIntro.scss';

import sunsetPic from 'media/sunset.gif';

export default view(() => {
  // Create an array of letters
  const firstLine = Array.from('Por un mundo donde quepan todos los mundos.');
  const secondLine = 'For a world where all worlds fit.';

  // Add staggering effect to the children of the container
const containerVariants = {
  before: {},
  after: { transition: { staggerChildren: 0.055 } },
};

// Variants for animating each letter
const letterVariants = {
  before: {
    opacity: 0,
    y: 20,
    transition: {
        type: "spring",
        damping: 16,
        stiffness: 200,
    },
  },
  after: {
    opacity: 1,
    y: 0,
    transition: {
        type: "spring",
        damping: 16,
        stiffness: 200,
    },
  },
};

// Variants for animating the sentence
const easeVariants = {
  before: {
    opacity: 0,
  },
  after: {
    opacity: 1,
    transition: {
        ease: [0.17, 0.67, 0.83, 0.67] ,
    },
  }
};


  return (
      <section className="hero is-fullheight is-bold has-text-grey is-dark">
        <img alt="" className={classNames(css.heroBackground, css.isTransparent, css.hasBackground, 'is-mobile')} src={sunsetPic} />

        <div className="hero-head">
          <div className="container">
          </div>
        </div>
        <div className="hero-body">
          <motion.div className="container mx-6"
          variants={ containerVariants }
          initial={ "before" }
          animate={ "after" }
          >
          <h1 className="title has-text-primary-light is-1">Pluriversal,</h1>
          <h1 className="title has-text-primary-light is-3">
          
              <quote>
              {firstLine.map((letter, index) => (
    <motion.span
      key={ index }
      variants={ letterVariants }
      >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
        ))}

              </quote>
          </h1>
          <br/>
          <motion.h2 className="subtitle has-text-primary-light is-4"
          variants={ easeVariants }
          >
            <i>{secondLine}</i>
        </motion.h2>
      
          </motion.div>
        </div>
      </section>
  )
});
