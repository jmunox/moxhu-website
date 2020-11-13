import * as React from 'react';
import { view } from 'react-easy-state';
import { Route, Link } from 'react-router-dom';


export default view(() => {
  return (
    <React.Fragment>
      <section id='contact-links' className='section has-background-dark pt-6 mt-6'>
        <div className='container has-text-centered px-6'>
          <div className='ml-3'>
            <div className='columns is-vcentered is-mobile is-multiline'>
              <div className='column pb-5 is-one-fifth-touch'>
                <a href='https://scholar.google.com/citations?user=JalMHCoAAAAJ&hl=en' target='_blank'><h2 className='button is-dark subtitle'><u>research</u></h2></a>
              </div>
              <div className='column pb-5 is-one-fifth-touch'>
                <a title='contact' href='https://github.com/jmunox' target='_blank'><h2 className='button is-dark subtitle'><u>github</u></h2></a>
              </div>
              <div className='column pb-5 is-one-fifth-touch'>
                <a href='https://www.linkedin.com/in/jmunoza/' target='_blank'><h2 className='button is-dark subtitle'><u>linkedin</u></h2></a>
              </div>
              <div className='column pb-5 is-one-fifth-touch'>
                <a href='https://instagram.com/jmunox' target='_blank'><h2 className='button is-dark subtitle'><u>instagram</u></h2></a>
              </div>
              <div className='column pb-5 is-one-fifth-touch'>
                <a title='updates' href='https://twitter.com/jmunox' target='_blank'><h2 className='button is-dark subtitle'><u>twitter</u></h2></a>
              </div>
            </div>
            <div className='columns is-vcentered is-centered is-mobile is-multiline'>
              <div className='column pb-5'>
                <a href='mailto:info@moxhu.com' className='button is-dark subtitle'>
                  <span className='icon'>
                    <i className='far fa-envelope'></i>
                  </span>
                  <span> info[at]moxhu.com</span>
                </a>
              </div>
              <div className='column pb-5'>
                <a href='tel:+31634232351' className='button is-dark subtitle'>
                  <span className='icon'>
                    <i className='fas fa-phone-alt'></i>
                  </span>
                  <span>+31 6 34232351</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer class='footer'>
        <div class='content has-text-centered px-6'>
          <div className='ml-3'>
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
            <p className='lead'>
              <strong>Moxhu</strong> by Jesus Muñoz-Alcántara - {new Date().getFullYear()}. <br />
              The source code is licensed <a href='http://opensource.org/licenses/mit-license.php'>MIT</a>. The website content
              is licensed <a href='http://creativecommons.org/licenses/by-nc-sa/4.0/'>CC BY NC SA 4.0</a>.
            </p>
          </div>
        </div>
      </footer>
    </React.Fragment>
  )
});
