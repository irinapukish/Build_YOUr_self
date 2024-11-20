const CalculateCalories = (weight, height, age, gender, goal, activity) => {
  let bmr;

  // Obliczanie BMR (Basal Metabolic Rate) na podstawie wzoru Mifflina
  if (gender === "male") {
    bmr = (10 * weight) + (6.25 * height) - (5 * age) + 5;
  } else if (gender === "female") {
    bmr = (10 * weight) + (6.25 * height) - (5 * age) - 161;
  }

  // Mnożnik aktywności
  const activityLevels = {
    1: 1.2, // Brak aktywności fizycznej
    2: 1.375, // Lekko aktywny
    3: 1.55, // Średnia aktywność
    4: 1.725, // Wysoka aktywność
    5: 1.9, // Bardzo wysoka aktywność
  };

  const totalCalories = bmr * activityLevels[activity];

  // Dostosowanie na podstawie celu
  let adjustedCalories = totalCalories;
  if (goal === "lose") {
    adjustedCalories -= 500; // Deficyt kaloryczny dla utraty wagi
  } else if (goal === "gain") {
    adjustedCalories += 500; // Nadwyżka kaloryczna dla nabierania wagi
  }

  return adjustedCalories.toFixed(2);
};

export default CalculateCalories;

