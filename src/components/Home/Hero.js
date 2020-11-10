import * as React from 'react';
import { view } from 'react-easy-state';
import { motion } from 'framer-motion';

export default view(() => {

    // Add staggering effect to the children of the container
  const containerVariants = {
  before: {},
    after: { transition: { staggerChildren: 0.06 } },
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
      <section className="hero is-fullheight-with-navbar is-bold has-text-grey is-dark">

        <motion.div className="hero-body"
                  variants={ containerVariants }
                  initial={ "before" }
                  animate={ "after" }
        >
          <motion.div className="container pl-3 mx-6"
          variants={ easeVariants }
          >
            <h1 className="title has-text-primary-light">
              Power your future <br /> with the people <br /> who love <br />your product.
        </h1>
            <h2 className="subtitle has-text-primary-light pt-6 is-3">
              Bring user experience at the forefront.
      </h2>
            <a className="button is-large is-purple"
            onClick={
              (event) => {
                event.preventDefault(); 
                document.getElementById('intro').scrollIntoView({ behavior: 'smooth', block: 'start' })
            }}>
              <span className="">Discover how</span>
              <span className="icon">
                <i className="fas fa-chevron-down"></i>
              </span>
            </a>
          </motion.div>
        </motion.div>
      </section>
  )
})
