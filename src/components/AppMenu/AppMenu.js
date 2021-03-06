import React, { useRef } from 'react';
import { motion, useCycle } from 'framer-motion';
import { useDebounce, useDimensions } from 'utils/Hook';
import classNames from 'classnames';
import { MenuToggle } from './MenuToggle';
import { Navigation } from './Navigation';

import * as css from './AppMenu.scss';

/*
* Source:
* https://codesandbox.io/s/framer-motion-side-menu-mx2rw?from-embed=&file=/src/styles.css
*/
const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: 'circle(30px at 40px 40px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40
    }
  }
};


const BurgerMenu = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  let z = isOpen ? '1000' : '0';

  let style = { 
        zIndex: isOpen ? useDebounce(z, 0): useDebounce(z, 1000),
        width: isOpen ? useDebounce('100%', 0): useDebounce('auto', 1000)
      };
  let isHidden = isOpen ? useDebounce('', 0): useDebounce('is-hidden', 500); 
  //document.body.className = 'has-navbar-fixed-top';

  return (
    <motion.nav className='' role='navigation' aria-label='main navigation'
    style={style}
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      custom={height}
      ref={containerRef}
    >
      <motion.div className={css.background} variants={sidebar} />
      <div className={classNames('container', isHidden)}>
        <div>
        <Navigation toggle={() => toggleOpen()} />
        </div>
      </div>
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  );
};

export default BurgerMenu;
