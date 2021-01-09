import * as React from 'react';
import { view } from 'react-easy-state';
import classNames from 'classnames';
import { useBoolean } from 'utils/Hook';

export default view(() => {
    return (
        <section className='hero is-medium is-bold has-text-grey is-dark'>
      <Navbar />
      <div className='hero-body'>
        <div className='container'>
        <div className=''>
          <div className='has-text-left'>
          
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
          </div>
        </div>
        </div>
      </div>
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
            <a className='navbar-item is-size-5-desktop'>
              Home
            </a>
            <a className='navbar-item is-size-5-desktop'>
              About
            </a>
            <a className='navbar-item is-size-5-desktop'>
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
