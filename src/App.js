import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, useLocation, Link } from 'react-router-dom';
import { store, view } from 'react-easy-state';
import { useDebounce } from 'utils/Hook';

import Home from 'components/Home/Home';
import AboutMe from 'components/AboutMe/AboutMe';
import LoadingIntro from 'components/LoadingIntro/LoadingIntro';
import ContactLinks from 'components/ContactLinks/ContactLinks';
import SelectedWork from 'components/Work/SelectedWork';

import './styles/main.scss';

import ProfilePic from 'media/profile-circle.png';

const ContactUs = React.lazy(() => import('./components/ContactUs/ContactUs'));

const withSuspense = Component => {
  return props => (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Component {...props} />
    </React.Suspense>
  )
};

const loadComponent = (Component, showIntro = false) => {
  const splashScreen = store({
    isActive: true,
  });
  let isActive = useDebounce(splashScreen.isActive, 5000);
  
  useEffect(() => {
    splashScreen.isActive = false;
  },[isActive]);

  return props => (
    <React.Fragment>
    { 
      (showIntro && isActive) ? 
      <LoadingIntro/> :
      <React.Fragment>
        <Component {...props} />
        <AboutMe/>
        <ContactLinks/>
      </React.Fragment>
    } 
    </React.Fragment>
  );  
};

const NotFound = () => {
  let location = useLocation();

  return (
    <Status code={404}>
      <section className='section has-background-dark'>
      <div className='container px-6 mt-5'>
        <h1 className='title is-3 has-text-white ml-3'>404</h1>
        <h3 className='subtitle is-4 has-text-white ml-3'>
          No result found 
        </h3>
      </div>
      </section>
      <section id='contact-links' className='section has-background-white'>
        <div className='container has-text-centered'>
          <Link className='subtitle' style={{ textDecoration: 'none' }} to='/'>Home</Link> 
        </div>
        </section>
    </Status>
  );
};

function Status({ code, children }) {
  return (
    <Route
      render={({ staticContext }) => {
        if (staticContext) staticContext.status = code;
        return children;
      }}
    />
  );
};

export default view((props) => {

  let linkIcon = document.createElement('link');
  linkIcon.rel = 'shortcut icon';
  linkIcon.href = ProfilePic;
  document.getElementsByTagName('head')[0].appendChild(linkIcon);
  //<Route path="*" component={NotFound}  status={404} />
  return (
    <React.Fragment>
    <Router>
    <Switch>
      <Route path="/" exact component={loadComponent(Home, true)} />
      <Route path="/home/:header" exact component={loadComponent(Home, false)} />
      <Route path="/home" exact component={loadComponent(Home, true)} />
      <Route path="/contact" exact component={loadComponent(withSuspense(ContactUs), true)} />
      <Route path="/work" exact component={loadComponent(SelectedWork, false)} />
      <Route path="*" component={NotFound}  status={404} />
    </Switch>
  </Router>
  </React.Fragment>
  )
});