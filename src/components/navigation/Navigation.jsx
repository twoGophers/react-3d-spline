import React from 'react';
import Logo from '../../assets/images/logo.svg';
import { useEffect, useState, useRef } from 'react';

export default function Navigation() {

    const [ logo, setLogo ] = useState(false);
    const positionNavigate = useRef();

  return (
    <div className='navigation'
        data-scroll
    >
        <div 
            className='navigation__control'
        ></div>
        <div 
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
