import './App.css';import React from 'react';
import backgroundSVG from './mask-logo.svg';
import BmiCalculator from './BmiCalculator';

  function App() {
    return (
      <div className="App">
        <div className="navigation-bar"></div>
        <div className="header">
          <div className="background-container" style={{ backgroundImage: `url(${backgroundSVG})` }}>
            <p className="knopka">przycisk - Oblicz zapotrzebowanie Kcal</p>
          </div>
          <img src="./images/first2.jpg" alt="Opis zdjęcia" />
        </div>
        <h2>Kalkulator kalorii</h2>
        <p>
        Ile kalorii potrzebujesz, aby schudnąć, zbudować mięśnie lub utrzymać aktualną wagę? Ta figura jest indywidualna dla każdego. Wprowadź swoje dane, a kalkulator kalorii obliczy dla Ciebie optymalną wartość, biorąc pod uwagę: płeć, wiek, wzrost, aktualną wagę i aktywność. Na podstawie tych danych program oblicza Twój podstawowy metabolizm, czyli ile kalorii potrzebuje Twój organizm, aby utrzymać wszystkie narządy i procesy. A kalkulator wskaźnika masy ciała (BMI) pokaże, jaka jest twoja waga: niedowaga, normalna, nadwaga lub otyłość. W zależności od Twojego BMI i podstawowego metabolizmu, kalkulator automatycznie obliczy Twoje przybliżone dzienne spożycie kalorii, aby osiągnąć swój cel.
        </p>
        <BmiCalculator />
      </div>
    );
  }
  
  export default App;
