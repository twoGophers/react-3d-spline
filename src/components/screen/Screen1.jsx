import Spline from '@splinetool/react-spline';
import { useEffect, useState, useRef } from 'react';

export default function Screen1() {

const [ positionTop, setPositionTop ] = useState(true);

  return (
    <div
      className='screen1'
      >
        <div
          className="screen1__block-position"
        ></div>
        <Spline
          className={ positionTop ? 'screen1__spline screen1__spline-show' : 'screen1__spline  screen1__spline-hide' } 
          scene="https://prod.spline.design/4WoBi1qClUh4EKvR/scene.splinecode" >
        </Spline>

    </div>
  )
}
