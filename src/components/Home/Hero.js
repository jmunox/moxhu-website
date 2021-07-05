import * as React from 'react';
import { view } from 'react-easy-state';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import classNames from 'classnames';
import { useBoolean } from 'utils/Hook';

export default view(() => {

  const [page, setPage] = useState(0);
  

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
        ease: [0.17, 0.67, 0.83, 0.67],
      },
    }
  };

    // Variants for animating the sentence
    const wordVariants = {
      enter: { x: 50, opacity: 0 },
      center: { x: 0, opacity: 1 },
      exit: { x: -50, opacity: 0 },
  }

    const words = [
      {
        title: 'love',
        color: 'var(--design_bg)'
      },
      {
        title: 'challenge',
        color: '#9198e5'
      },
      {
        title: 'need',
        color: '#ffa07a'
      },
      {
        title: 'connect to',
        color: '#ff5c5c'
      },
      {
        title: 'change',
        color: 'var(--user_bg)'
      },
      {
        title: 'are critical about',
        color: 'var(--tech_bg)'
      },
      {
        title: 'innovate',
        color: 'var(--user_text)'
      }

    ];

    const wordIndex = Math.abs(page) % words.length;
    setTimeout(() => setPage(page + 1), 3000)

    const Slideshow = ({ word = words[wordIndex] }) => (
      <AnimatePresence initial={false}>
        <motion.span
          key={word.title}
          variants={wordVariants}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          initial='enter'
          animate='center'
          exit='exit'
          style={{color : word.color}}
        > {word.title}
        </motion.span>
      </AnimatePresence>
    )

  return (
    <section id='/home/start' className='hero is-fullheight is-bold has-text-grey is-dark pb-6'>
      {/*<Navbar />*/}
      <motion.div className='hero-body'
        variants={containerVariants}
        initial={'before'}
        animate={'after'}
      >
        <div className='container'>
        <div className=''>
          <motion.div className='has-text-left'
            variants={easeVariants}
          >
          
            <h1 className='super title has-text-primary-light'>
              Power your future <br /> with the people <br /> who 
              <Slideshow />
               <br />your product.
            </h1>
            <h2 className='super subtitle has-text-primary-light pt-6 pb-5'>
              Embrace the power of collective imagination.
            </h2>
            <a className='button is-size-5-desktop is-purple'
              onClick={
                (event) => {
                  event.preventDefault();
                  document.getElementById('/home/intro').scrollIntoView({ behavior: 'smooth', block: 'start' })
                }}>
              <span className=''>Discover how</span>
              <span className='icon'>
                <i className='fas fa-chevron-down'></i>
              </span>
            </a>
          </motion.div>
        </div>
        </div>
      </motion.div>
    </section>
  )
});

const Navbar = () => {
  const menuState = useBoolean(false); 
  let isActive = false
  //console.log(menuState.value)
  return (
    <div className='hero-head'>
    <nav className='navbar'>
      <div className='container'>
        <div className='navbar-brand'>
          
          <span className={classNames('navbar-burger', menuState.value ? 'is-active': '')} data-target='navbarMenuHeroA' 
          style='clip-path: circle(20px at 50% 50%); background-color: white;'
          onClick={
            (event) => {
              event.preventDefault();
              menuState.inverse();
            }} >
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id='navbarMenuHeroA' className={classNames('navbar-menu', menuState.value ? 'is-active': '')}>
          <div className='navbar-end'>
            <a className='navbar-item is-size-5-desktop is-active'
            onClick={
              (event) => {
                //event.preventDefault();
                if (menuState.value) menuState.inverse();
              }}>
              Home
            </a>
            <a className='navbar-item is-size-5-desktop'
            onClick={
              (event) => {
                event.preventDefault();
                if (menuState.value) menuState.inverse();
                document.getElementById('/home/intro').scrollIntoView({ behavior: 'smooth', block: 'start' })
              }}>
              About
            </a>
            <a className='navbar-item is-size-5-desktop'
            onClick={
              (event) => {
                event.preventDefault();
                if (menuState.value) menuState.inverse();
                document.getElementById('/home/services').scrollIntoView({ behavior: 'smooth', block: 'start' })
              }}>
              Services
            </a>
            <a href='/work' className='navbar-item is-size-5-desktop'>
              Work
            </a>
            <a className='navbar-item is-size-5-desktop'
              onClick={
                (event) => {
                  event.preventDefault();
                  if (menuState.value) menuState.inverse();
                  document.getElementById('/home/contact').scrollIntoView({ behavior: 'smooth', block: 'start' })
                }}>
                <span>Contact</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  </div>
  )
}
