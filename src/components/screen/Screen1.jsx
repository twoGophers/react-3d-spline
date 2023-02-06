import Spline from '@splinetool/react-spline';
import { useEffect, useState, useRef } from 'react';

export default function Screen1() {

const [ positionTop, setPositionTop ] = useState(true);

const positionScree1 = () => {
    setTimeout(() => {
      let screen1__block_position = document.querySelector('.screen1__block-position');
      if(screen1__block_position.classList.contains('is-inview')) {
        setPositionTop(true);
      } else {
        setPositionTop(false);
      }
    }, 500);
}

useEffect(() => {
  window.addEventListener("scroll", positionScree1);
}, []);

  return (
    <div
      className='screen1' 
      id='screen'>
        <div
          data-scroll             
          data-scroll-repeat="true"
          className="screen1__block-position"
        ></div>
        <Spline
          data-scroll             
          data-scroll-repeat="true"
          className={ positionTop ? 'screen1__spline screen1__spline-show' : 'screen1__spline  screen1__spline-hide' } 
          scene="https://prod.spline.design/4WoBi1qClUh4EKvR/scene.splinecode" >
        </Spline>

    </div>
  )
}
