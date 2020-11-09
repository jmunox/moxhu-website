import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";

import ProfilePic from 'media/profile-circle.png';

/*
* Source:
* https://codesandbox.io/s/framer-motion-side-menu-mx2rw?from-embed=&file=/src/styles.css
*/
const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

export const Navigation = ({toggle}) => (
  <motion.ul variants={variants}>
    {items.map(i => (
      <MenuItem item={i} key={i} toggle={toggle} />
    ))}
  </motion.ul>
);

const items = [
    { 
        'label': 'Home',
        'icon': <figure className='image is-36x36'><img className='is-rounded' src={ProfilePic} /></figure>,
        'link':'/',
        'color': "#FF008C"
    },
    { 
        'label': 'Contact',
        'icon': '',
        'link':'/contact',
        'color': "#D309E1"
    },
]


const itemIds = [0, 1, 2, 3, 4];
