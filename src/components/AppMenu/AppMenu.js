import * as React from 'react'
import { Route, Link } from 'react-router-dom'

import * as css from './AppMenu.scss'

const AppMenu = () => {
  document.body.className = 'has-navbar-fixed-top'; //['has-navbar-fixed-top']
  return(
  <nav className="navbar is-transparent is-fixed-top" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
    <div className="navbar-item">
    <Route
    path='/'>
    <Link to='/'>
          <img src="" width="112" height="28"/>
        </Link>
    </Route>
    </div>
    <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" className="navbar-menu">
   

    <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons">
        <ItemLink label="Cases" to="/" />
        <ItemLink label="Contact" to="/contact" />
        </div>
      </div>
    </div>
  </div>
</nav>
)}

const ItemLink = ({ label, to, ...rest }) => (
  <Route
    path={to}
    children={({ match }) => (
      <div className={match ? 'active button is-light' : 'button is-light'}>
        <Link to={to} {...rest}>
            {label}
        </Link>
      </div>
    )}
  />
)

export default AppMenu
