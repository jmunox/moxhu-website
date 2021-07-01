import * as React from 'react';
import { view } from 'react-easy-state';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import classNames from 'classnames';
import Hero from './Hero';
import HelloThere from './HelloThere';
import WhatFuture from './WhatFuture';
import The5Whats from './The5Whats';
import HolisticApproach from './HolisticApproach';
import Organizations from './Organizations';

import { useBoolean } from 'utils/Hook';

import LoadingIntro from 'components/LoadingIntro/LoadingIntro';

import PicBanner from 'media/linked-in-banner.png';

export default view((props) => {
  const { pathname } = useLocation();
  
  const routeChild = '/home/' + props.route;
  

  useEffect(() => {
    if (pathname=='/' || pathname=='/home' ) {
      window.scrollTo(0, 0);
    } else if (document.getElementById(pathname)){
      document.getElementById(pathname).scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [pathname]);

  if (routeChild && document.getElementById(routeChild)){
    document.getElementById(routeChild).scrollIntoView({ behavior: 'smooth', block: 'start' })
  }


  const Banner = () => (
    <section>
        <img src={PicBanner} style={{ width: '100%' }} />
      </section>
  );

  const GetInTouchTitle = () => (
      <section className='section'>
        <div className=''>
          <div className='container'>
            <h1 className='super title'>Get in touch</h1>
            <h2 className='super subtitle'>
              Change how people feel about your product and your business.
            </h2>
          </div>
        </div>
      </section>
  );

  return (
    <React.Fragment>
      <LoadingIntro />
      <Navbar/>
      <Hero />
      <HelloThere />
      <WhatFuture />
      <Organizations />
      <The5Whats />
      <Banner />
      <GetInTouchTitle/>
    </React.Fragment>
  )
});


const Navbar = () => {
  const menuState = useBoolean(false); 
  let isActive = false
  //console.log(menuState.value)
  return (
    <div className=''>
    <nav className='navbar is-dark is-fixed-top'>
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