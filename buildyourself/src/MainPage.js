import React, { useRef } from 'react';
import backgroundSVG from './mask-logo.svg';
import BmiCalculator from './BmiCalculator';
import ScrollButton from './MyButton';

const MainPage = () => {
  const sectionRef = useRef(null);
return(
<>
        <div className="header">
          <div className="background-container" style={{ backgroundImage: `url(${backgroundSVG})` }}>
            <p>
              <ScrollButton scrollToRef={sectionRef} />
            </p>
          </div>
          <img src="./images/first2.jpg" alt="Opis zdjęcia" />
        </div>
        <div>
          <h2 ref={sectionRef}>Kalkulator kalorii</h2>
          <p>
            Ile kalorii potrzebujesz, aby schudnąć, zbudować mięśnie lub utrzymać aktualną wagę? Ta figura jest indywidualna dla każdego. Wprowadź swoje dane, a kalkulator kalorii obliczy dla Ciebie optymalną wartość, biorąc pod uwagę: płeć, wiek, wzrost, aktualną wagę i aktywność. Na podstawie tych danych program oblicza Twój podstawowy metabolizm, czyli ile kalorii potrzebuje Twój organizm, aby utrzymać wszystkie narządy i procesy. A kalkulator wskaźnika masy ciała (BMI) pokaże, jaka jest twoja waga: niedowaga, normalna, nadwaga lub otyłość. W zależności od Twojego BMI i podstawowego metabolizmu, kalkulator automatycznie obliczy Twoje przybliżone dzienne spożycie kalorii, aby osiągnąć swój cel.
          </p>
          <BmiCalculator />
        </div>

        </>
);
}

export default MainPage;