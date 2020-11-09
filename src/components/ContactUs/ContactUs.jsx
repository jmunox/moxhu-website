import * as React from 'react';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { view } from 'react-easy-state';

export default view(() => {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return(
        <section className='section has-background-dark'><div className='container pl-3 mx-6'><h1 className='title has-text-light'>Get in touch</h1></div></section>
    )
})
