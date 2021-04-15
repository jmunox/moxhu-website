import * as React from 'react';
import { view } from 'react-easy-state';
import { motion } from 'framer-motion';
import classNames from 'classnames';
import { useBoolean } from 'utils/Hook';

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
        ease: [0.17, 0.67, 0.83, 0.67],
      },
    }
  };

  return (
    <section className='hero is-fullheight is-bold has-text-grey is-dark pb-6'>
      <Navbar />
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
              Power your future <br /> with the people <br /> who love <br />your product.
            </h1>
            <h2 className='super subtitle has-text-primary-light pt-6 pb-5'>
              Bring user experience at the forefront.
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
  console.log(menuState.value)
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
