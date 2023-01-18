import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import React, { useRef, useState, useEffect } from 'react';

//Components
const Screen1 = React.lazy(() => import ("./components/screen/Screen1")) ;

function App() {

  const [ preloader, setPreloader ] = useState(true);

  const containerRef = useRef(null);

  


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
                  multiplier: 1, // скорость прокрутки скролла
                  offset: [0, 0],
                  class: 'is-inview'
                  // ... all available Locomotive Scroll instance options 
                }
              }
              watch={
                [
                  //..all the dependencies you want to watch to update the scroll.
                  //  Basicaly, you would want to watch page/location changes
                  //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
                ]
              }
              containerRef={containerRef}
              >
                  <div className="App" data-scroll-container  ref={containerRef}>
                    <section
                      data-scroll-section
                      data-scroll-repeat="true"
                      >
                      <Screen1 />
                    </section>
                    <section data-scroll-section>
                      <div style={{ width: `100vw`, height: `300vh` }}></div>
                    </section>
                </div>
            </LocomotiveScrollProvider>
        }
    </>
  );
}

export default App;
