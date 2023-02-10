import React, { useRef, useState, useEffect, useLayoutEffect } from 'react';

import Navigation from './components/navigation/Navigation';

import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

//Components
const Screen1 = React.lazy(() => import ("./components/screen/Screen1")) ;

function App() {

  const [ preloader, setPreloader ] = useState(true);

  const app = useRef(null);

  useEffect(() => {
    setPreloader(false);
  }, []);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.test', {
        rotation: 360,
        duration: 2,
        repeat: -1,
        yoyo: true
      })
    }, app);

    return () => ctx.revert();

  }, [])
  
  return (
    <>
        { preloader 
          ? <div>
              loading
            </div>
          : 
              <div ref={app} className="App">
                  <section className='section-navigate'>
                      <Navigation />
                  </section>
                  <section className='section-one container' data-scroll-container>
                      <Screen1 preloader={preloader} />
                  </section >
                  <div className='test' style={{ height: `200px`, width: `200px`, background: `red` }}></div>
              </div>
        }
    </>
  );
}

export default App;
