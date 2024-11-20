import React, { useState } from 'react';

function BmiCalculator() {
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [activity, setActivity] = useState('');
  const [goal, setGoal] = useState('');
  const [calories, setCalories] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false); // Dodany stan do kontrolowania widoczności

  const calculateCalories = () => {
    if (gender && age && height && weight && activity && goal) {
      const parsedAge = parseInt(age, 10);

      // Walidacja wieku
      if (parsedAge < 18 || parsedAge > 65) {
        alert("Proszę podać wiek w przedziale 18-65 lat.");
        return;
      }

      let bmr;

      // Obliczanie BMR (Basal Metabolic Rate) na podstawie wzoru Mifflina
      if (gender === 'male') {
        bmr = (10 * weight) + (6.25 * height) - (5 * age) + 5;
      } else if (gender === 'female') {
        bmr = (10 * weight) + (6.25 * height) - (5 * age) - 161;
      }

      // Mnożnik aktywności
      const activityLevels = {
        1: 1.2,   // Brak aktywności fizycznej
        2: 1.375, // Lekko aktywny
        3: 1.55,  // Średnia aktywność
        4: 1.725, // Wysoka aktywność
        5: 1.9,   // Bardzo wysoka aktywność
      };

      const totalCalories = bmr * activityLevels[activity];

      // Dostosowanie na podstawie celu
      let adjustedCalories = totalCalories;
      if (goal === 'lose') {
        adjustedCalories -= 500; // Deficyt kaloryczny dla utraty wagi
      } else if (goal === 'gain') {
        adjustedCalories += 500; // Nadwyżka kaloryczna dla nabierania wagi
      }

    setCalories(adjustedCalories.toFixed(2));

const userInfo = {
  gender: gender,
  age: age,
  height: height,
  weight: weight,
  activity: activity,
  goal: goal
};
const userIngoJSON = JSON.stringify(userInfo);
localStorage.setItem("userInfo", userIngoJSON);

localStorage.setItem("calories", adjustedCalories.toFixed(2));

setIsSubmitted(true); // Ukryj formularz po obliczeniu
    } else {
      alert("Proszę wypełnić wszystkie pola.");
    }
  };

  const resetForm = () => {
    setGender('');
    setAge('');
    setHeight('');
    setWeight('');
    setActivity('');
    setGoal('');
    setCalories(null);
    setIsSubmitted(false); // Pokaż formularz ponownie
  };

  return (
    <div className="bmi-container">
    {/* Formularz */}
    {!isSubmitted ? (
      <>
      {/* Wybór płci */}
      <div className="bmi-input-group">
        <label className="bmi-label">Płeć:</label>
        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          className="bmi-input"
        >
          <option value="">Wybierz płeć</option>
          <option value="male">Mężczyzna</option>
          <option value="female">Kobieta</option>
        </select>
      </div>

      {/* Wiek */}
      <div className="bmi-input-group">
        <label className="bmi-label">Wiek (18-65):</label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="bmi-input"
          min="18"
          max="65"
        />
      </div>

      {/* Wzrost */}
      <div className="bmi-input-group">
        <label className="bmi-label">Wzrost (cm):</label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          className="bmi-input"
          min="100"
          max="220"
        />
      </div>

      {/* Waga */}
      <div className="bmi-input-group">
        <label className="bmi-label">Waga (kg):</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className="bmi-input"
          min="30"
        />
      </div>

      {/* Poziom aktywności */}
      <div className="bmi-input-group">
        <label className="bmi-label">Wybierz poziom aktywności:</label>
        <select
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
          className="bmi-input"
        >
          <option value="">Wybierz aktywność</option>
          <option value="1">Brak aktywności fizycznej</option>
          <option value="2">Lekko aktywny</option>
          <option value="3">Średnia aktywność (2-3 razy w tygodniu)</option>
          <option value="4">Wysoka aktywność (4-5 razy w tygodniu)</option>
          <option value="5">Bardzo wysoka aktywność (każdego dnia)</option>
        </select>
      </div>

      {/* Cel */}
      <div className="bmi-input-group">
        <label className="bmi-label">Cel:</label>
        <select
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          className="bmi-input"
        >
          <option value="">Wybierz cel</option>
          <option value="lose">Utrata wagi</option>
          <option value="maintain">Utrzymanie wagi</option>
          <option value="gain">Nabieranie wagi</option>
        </select>
      </div>

      {/* Przyciski */}
      <div className="bmi-button-group">
        <button onClick={calculateCalories} className="bmi-button calculate">
          Oblicz Kalorie
        </button>
        <button onClick={resetForm} className="bmi-button reset">
          Resetuj
        </button>
      </div>
      </>
    ) : (
      // Komunikat po wysłaniu
      <div>
        {calories && (
          <div className="bmi-result">
            <h3 className="bmi-result-value">Twoje dzienne zapotrzebowanie kaloryczne: {calories} kcal</h3>
          </div>
        )}
        <h2>Otrzymaj swój pełny raport oraz plan tygodniowy po zarejestrowaniu!</h2>
        <button onClick={() => window.location.href = '/register'} style={styles.button}> Zarejestruj się</button>
      </div>
    )}
  </div>
);
}

const styles = {
  button: {
    backgroundColor: '#28a745',
    color: 'white',
    padding: '12px 20px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
}

export default BmiCalculator;
