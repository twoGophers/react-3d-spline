import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import React, { useRef, useState, useEffect } from 'react';
import Navigation from './components/navigation/Navigation';

//Components
const Screen1 = React.lazy(() => import ("./components/screen/Screen1")) ;

function App() {

  const [ preloader, setPreloader ] = useState(true);
  const containerRef = useRef(null);

  //Change scroll main, but not work in Locomotiv
  const [scrollPosition, setSrollPosition] = useState(0);
  const handleScroll = () => {
      const position = window.pageYOffset;
      setSrollPosition(position);
  };

  useEffect(() => {
    setPreloader(false);
  }, []);

  //Scroll main
  useEffect(() => {
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);

  return (
    <>
        { preloader 
          ? <div>
              loading
            </div>
          : <LocomotiveScrollProvider
              options={
                {
                  smooth: true, 
                  multiplier: 0.3, // скорость прокрутки скролла
                  // ... all available Locomotive Scroll instance options 
                }
              }
              watch={
                []
              }
              onLocationChange={scroll => scroll.scrollTo(0, { duration: 0, disableLerp: true })} // If you want to reset the scroll position to 0 for example
              onUpdate={() => console.log('Updated, but not on location change!')}
              containerRef={containerRef}
              >
                  <div className="App" id='app' data-scroll-container ref={containerRef}>
                    <section
                      data-scroll-section
                    >
                      <Navigation />
                    </section>
                    <section
                      data-scroll-section
                      className='section-one container'
                      >
                        {/* <Screen1 preloader={preloader} /> */}
                    </section>
                    <section 
                    data-scroll-section
                    >
                      <div 
                        className='scroll-screen2'
                        data-scroll-repeat="true"
                        style={{ width: `100vw`, height: `300vh` }}></div>
                    </section>
                </div>
            </LocomotiveScrollProvider>
        }
    </>
  );
}

export default App;
