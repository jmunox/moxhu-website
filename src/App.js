import * as React from 'react'
import './styles/main.scss'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import AppMenu from 'components/AppMenu/AppMenu'


const ContactUs = React.lazy(() => import('./components/ContactUs/ContactUs'))
const Home = React.lazy(() => import('./components/Home/Home'))

const withSuspense = Component => {
  return props => (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Component {...props} />
    </React.Suspense>
  )
}

export default () => {
  return (
    <Router>
        <AppMenu />
        <Route path="/" exact component={withSuspense(Home)} />
        <Route path="/contact-us" component={withSuspense(ContactUs)} />
    </Router>
  )
}