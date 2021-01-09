import * as React from 'react';
import { view } from 'react-easy-state';
import { Route, Link } from 'react-router-dom';


export default view(() => {
  return (
    <React.Fragment>
      <section id='contact-links' className='section has-background-dark'>
        <div className='container has-text-centered'>
          <div className=''>
            <div className='columns is-vcentered is-mobile is-multiline'>
              <div className='column pb-3 is-one-fifth-desktop is-one-third-touch'>
                <a className='button is-dark is-size-5-desktop' href='https://scholar.google.com/citations?user=JalMHCoAAAAJ&hl=en' target='_blank'><u>research</u></a>
              </div>
              <div className='column pb-3 is-one-fifth-desktop is-one-third-touch'>
                <a className='button is-dark is-size-5-desktop' href='https://github.com/jmunox' target='_blank'><u>github</u></a>
              </div>
              <div className='column pb-3 is-one-fifth-desktop is-one-third-touch'>
                <a className='button is-dark is-size-5-desktop' href='https://www.linkedin.com/in/jmunoza/' target='_blank'><u>linkedin</u></a>
              </div>
              <div className='column pb-3 is-one-fifth-desktop is-one-half-touch'>
                <a className='button is-dark is-size-5-desktop' href='https://instagram.com/jmunox' target='_blank'><u>instagram</u></a>
              </div>
              <div className='column pb-3 is-one-fifth-desktop is-one-half-touch'>
                <a className='button is-dark is-size-5-desktop' href='https://twitter.com/jmunox' target='_blank'><u>twitter</u></a>
              </div>
            </div>
            <div className='columns is-vcentered is-centered is-mobile is-multiline'>
              <div className='column pb-4'>
                <a href='tel:+31634232351' className='button is-dark is-size-5-desktop'>
                  <span className='icon'>
                    <i className='fas fa-phone-alt'></i>
                  </span>
                  <span>+31 6 34232351</span>
                </a>
              </div>
              <div className='column pb-4'>
                <a href='mailto:info@moxhu.com' className='button is-dark is-size-5-desktop'>
                  <span className='icon'>
                    <i className='far fa-envelope'></i>
                  </span>
                  <span> info[at]moxhu.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer class='footer'>
        <div class='content has-text-centered'>
          <div className=''>
            <div className='columns is-vcentered is-centered is-mobile is-multiline'>
              <div className='column pb-5 is-one-third'>
                <Route
                  exact
                  path='/'
                  children={({ match }) => (
                    <div className='subtitle' style={match ? { textDecoration: 'overline' } : { textDecoration: 'none' }} >
                      { match ? 
                      <a 
                        onClick={
                        (event) => {
                        event.preventDefault();
                        window.scrollTo(0, 0);
                      }}>Home</a> 
                      : 
                    <Link to='/'>Home</Link> }
                    </div>
                  )}
                />
              </div>
              <div className='column pb-5 is-one-third'>
                <Route
                  exact
                  path='/contact'
                  children={({ match }) => (
                    <div className='subtitle' style={match ? { textDecoration: 'overline' } : { textDecoration: 'none' }} >
                      { match ? 
                      <a 
                        onClick={
                        (event) => {
                        event.preventDefault();
                        window.scrollTo(0, 0);
                      }}>Contact</a> 
                      : 
                    <Link to='/contact'>Contact</Link> }
                    </div>
                  )}
                />
              </div>
            </div>
            <p className='small-text'>
            Jesús Muñoz-Alcántara (@jmunox), Mexican Designer &amp; Researcher. <strong>Moxhu</strong> - {new Date().getFullYear()}.
            </p>
          </div>
        </div>
      </footer>
    </React.Fragment>
  )
});
