import * as React from 'react';
import { Route, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import * as css from './AppMenu.scss';

/*
* Source:
* https://codesandbox.io/s/framer-motion-side-menu-mx2rw?from-embed=&file=/src/styles.css
*/
const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};


const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

const ItemLink = ({ label, to, toggle, ...rest }) => (
    <Route
      exact
      path={to}
      children={({ match }) => (
        <h1 className='subtitle is-3' style={match ? { textDecoration: 'underline' } : {textDecoration: 'none'} } >
          <Link to={to} {...rest} onClick={toggle}>
              {label}
          </Link>
        </h1>
      )}
    />
  )

export const MenuItem = ({ item, toggle }) => {
    const style = { border: `2px solid ${item.color}` };
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className={css.iconPlaceholder} style={{ border: `2px solid ${item.color}` }} >
      <ItemLink label={item.icon} to={item.link} toggle={toggle}/>
        </div>
      <div className={css.textPlaceholder} style={{ color: `${item.color}` }} >
      <ItemLink label={item.label} to={item.link} toggle={toggle} />
        </div>
    </motion.li>
  );
};