import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';
import { store, view } from 'react-easy-state';
import { useDebounce } from 'utils/Hook';

import Home from 'components/Home/Home';
import AppMenu from 'components/AppMenu/AppMenu';
import AboutMe from 'components/AboutMe/AboutMe';
import LoadingIntro from 'components/LoadingIntro/LoadingIntro';
import ContactLinks from 'components/ContactLinks/ContactLinks';

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

const NoMatch = () => {
  let location = useLocation();

  return (
    <section className='section has-background-dark'>
    <div className='container px-6 mt-5'>
      <h3 className='subtitle is-4 has-text-white ml-3'>
        No result found at <code>{location.pathname}</code>
      </h3>
    </div>
    </section>
  );
};

const HomeWithChild = ({match, routeProps}) => {
  return(
      <Home route={match.params.header} {...routeProps}  />
  );
};


export default view((props) => {

  let linkIcon = document.createElement('link');
  linkIcon.rel = 'shortcut icon';
  linkIcon.href = ProfilePic;
  document.getElementsByTagName('head')[0].appendChild(linkIcon);

  const splashScreen = store({
    isActive: true,
  });
  let isActive = useDebounce(splashScreen.isActive, 6000);
  
  useEffect(() => {
    splashScreen.isActive = false;
  },[isActive]);

  return (
    <React.Fragment>
    { 
  (true && isActive) ? 
  <LoadingIntro/> :
    <Router>
    <AppMenu />
    <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/home" exact component={Home} />
    <Route path="/home/:header" component={HomeWithChild} />
    <Route path="/contact" exact component={withSuspense(ContactUs)} />
    <Route path="*" component={NoMatch} />
    </Switch>
    <AboutMe/>
    <ContactLinks/>
  </Router>
    } 
  </React.Fragment>
  )
});