import React, { useState } from 'react';

function BmiCalculator() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState('');

  const calculateBmi = () => {
    if (weight && height) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(bmiValue);

      if (bmiValue < 18.5) {
        setMessage('Niedowaga');
      } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
        setMessage('Prawidłowa waga');
      } else if (bmiValue >= 25 && bmiValue < 29.9) {
        setMessage('Nadwaga');
      } else {
        setMessage('Otyłość');
      }
    } else {
      alert("Proszę podać prawidłową wagę i wzrost.");
    }
  };

  const resetForm = () => {
    setWeight('');
    setHeight('');
    setBmi(null);
    setMessage('');
  };

  return (
    <div className="bmi-container">
      <h2 className="bmi-title">Kalkulator BMI</h2>
      <div className="bmi-input-group">
        <label className="bmi-label">Waga (kg):</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className="bmi-input"
        />
      </div>
      <div className="bmi-input-group">
        <label className="bmi-label">Wzrost (cm):</label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          className="bmi-input"
        />
      </div>
      <div className="bmi-button-group">
        <button onClick={calculateBmi} className="bmi-button calculate">
          Oblicz BMI
        </button>
        <button onClick={resetForm} className="bmi-button reset">
          Resetuj
        </button>
      </div>
      {bmi && (
        <div className="bmi-result">
          <h3 className="bmi-result-value">Twoje BMI: {bmi}</h3>
          <p className="bmi-result-message">{message}</p>
        </div>
      )}
    </div>
  );
}

export default BmiCalculator;
