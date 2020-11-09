import * as React from 'react';
import { useRef } from "react";
import { Route, Link } from 'react-router-dom';
import { motion, useCycle } from "framer-motion";
import { useDebounce, useDimensions } from 'utils/Hook';
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";

import * as css from './AppMenu.scss';

/*
* Source:
* https://codesandbox.io/s/framer-motion-side-menu-mx2rw?from-embed=&file=/src/styles.css
*/
const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
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

  let style = { zIndex: isOpen ? useDebounce(z, 0): useDebounce(z, 1000)};
  //document.body.className = 'has-navbar-fixed-top has-background-dark';

  return (
    <motion.nav className="section" role="navigation" aria-label="main navigation"
    style={style}
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
    >
      <motion.div className={css.background} variants={sidebar} />
      <Navigation toggle={() => toggleOpen()} />
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  );
};

export default BurgerMenu;
