import * as React from 'react';
import { view } from 'react-easy-state';
import classNames from 'classnames';
import { useBoolean } from 'utils/Hook';

export default view(() => {
    return (
      <>
        <section className='hero is-medium is-bold has-text-grey is-dark'>
      <Navbar />
      <div className='hero-body'>
        <div className='container'>
        <div className=''>
        <h2 className='super subtitle has-text-primary-light pb-5'>
              Explore my work in total freedom:
            </h2>
          <div className='has-text-centered'>
          <iframe width='100%' height='432' src='https://miro.com/app/live-embed/o9J_lMtfRMQ=/?moveToViewport=22676,-70144,11280,5701' frameBorder='0' scrolling='no' allowFullScreen></iframe>
          </div>
        </div>
        </div>
      </div>
    </section>
    <section className='section has-background-white'>
    <div className='py-6 my-6'>
      <div className='container'>
      <h2 className='super subtitle has-text-dark pb-5'>
              or jump directly to see a selection of my projects:
            </h2>
        <div className='has-text-centered'>      
          <iframe width='100%' height='432' src='https://miro.com/app/embed/o9J_lMtfRMQ=/?pres=1&frameId=3074457357242168475' frameBorder='0' scrolling='no' allowFullScreen></iframe>
        </div>
      </div>
      </div>
    </section>
    </>
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
            <a href='/home' className='navbar-item is-size-5-desktop'>
              Home
            </a>
            <a href='/home/contact' className='navbar-item is-size-5-desktop'>
              About
            </a>
            <a href='/home/services' className='navbar-item is-size-5-desktop'>
              Services
            </a>
            <a className='navbar-item is-size-5-desktop is-active'>
              Work
            </a>
            <a href='/home/contact' className='navbar-item is-size-5-desktop'>
                <span>Contact</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  </div>
  )
}
