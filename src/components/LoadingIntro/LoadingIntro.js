import * as React from 'react';
import { view } from 'react-easy-state';
import classNames from 'classnames';
import { motion } from 'framer-motion';

import { useBoolean } from 'utils/Hook';

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
        <div className="hero-head"><Navbar/></div>
        
        <div className="hero-body">
          <motion.div className="container"
          variants={ containerVariants }
          initial={ "before" }
          animate={ "after" }
          >
          <h1 className="super title has-text-primary-light">Pluriversal,</h1>
          <h1 className="super subtitle has-text-primary-light">
          
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
          <motion.h2 className="lead has-text-primary-light"
          variants={ easeVariants }
          >
            <i>{secondLine}</i>
        </motion.h2>
      
          </motion.div>
        </div>
        <div class="hero-foot has-background-dark has-text-primary-light">
          <a className='button super subtitle is-fullwidth is-ghost'
              onClick={
                (event) => {
                  event.preventDefault();
                  document.getElementById('/home/start').scrollIntoView({ behavior: 'smooth', block: 'start' })
                }}>
            <span className='icon'>
                  <i className='fas fa-chevron-down'></i>
            </span></a>
          </div>
      </section>
  )
});

const Navbar = () => {
  const menuState = useBoolean(false); 
  let isActive = false
  //console.log(menuState.value)
  return (
    <nav className='navbar is-fixed-top is-semi-transparent' role='navigation' aria-label='main navigation'>
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
            <a className='navbar-item is-size-5-desktop'
            onClick={
              (event) => {
                //event.preventDefault();
                if (menuState.value) menuState.inverse();
                document.getElementById('/home/start').scrollIntoView({ behavior: 'smooth', block: 'start' })
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
                document.getElementById('/home/work').scrollIntoView({ behavior: 'smooth', block: 'start' })
              }}>
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
  )
}

