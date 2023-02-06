import React from 'react';
import Logo from '../../assets/images/logo.svg';
import { useEffect, useState, useRef } from 'react';

export default function Navigation() {

    const [ logo, setLogo ] = useState(false);

    const positionNavigation = (value) => {
        console.log(value);
    }

    useEffect(() => {
        let positionScroll = document.querySelector('.navigation__control');
        if(positionScroll.classList.contains('is-inview')) {
            window.addEventListener("scroll", positionNavigation(true));
        } else {
            window.addEventListener("scroll", positionNavigation(false));
        }
        return () => {
            window.removeEventListener('scroll', positionNavigation);
        };
    }, []);


  return (
    <div className='navigation'>
        <div 
            data-scroll
            className='navigation__control'
        ></div>
        <div 
            data-scroll
            className='navigation__block'
        >
            <div className="navigation__logo">
sdfsdf
            </div>
            <div className="navigation__nav">

            </div>
            <div className="navigation__burger">

            </div>
        </div>
    </div>
  )
}
