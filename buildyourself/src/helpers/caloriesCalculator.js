const CalculateCalories = (weight, height, age, gender, goal, activity) => {
  let bmr;

  // Obliczanie BMR (Basal Metabolic Rate) na podstawie wzoru Harrisa-Benedicta
  if (gender === "male") {
    bmr = 88.36 + 13.4 * weight + 4.8 * height - 5.7 * age;
  } else if (gender === "female") {
    bmr = 447.6 + 9.2 * weight + 3.1 * height - 4.3 * age;
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
