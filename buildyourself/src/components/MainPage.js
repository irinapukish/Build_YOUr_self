import React, { useRef } from "react";
import BmiCalculator from "./BmiCalculator";

const MainPage = () => {
  const sectionRef = useRef(null);
  return (
    <div
      className="background-container"
      style={{ backgroundImage: `url(/images/mask-logo.svg)` }}>
      <h1 ref={sectionRef}>Kalkulator kalorii</h1>
      <h3>Wpisz swoje dane, żeby obliczyć zapotrzebowanie kaloryczne</h3>
      <BmiCalculator />
    </div>
  );
};

export default MainPage;