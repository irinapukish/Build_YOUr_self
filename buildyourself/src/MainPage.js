import React, { useRef } from 'react';
import backgroundSVG from './mask-logo.svg';
import BmiCalculator from './BmiCalculator';

const MainPage = () => {
  const sectionRef = useRef(null);
return(
<>
        <div className="background-container" style={{ backgroundImage: `url(${backgroundSVG})` }}>
          <h1 ref={sectionRef}>Kalkulator kalorii</h1>
          <BmiCalculator />
        </div>
        </>
);
}

export default MainPage;