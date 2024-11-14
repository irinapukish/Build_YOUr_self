// Funkcja do obliczenia makroskładników na podstawie kalorii i celu
  const CalculateMacros = (calories, goal) => {
    let proteinPercentage, fatPercentage, carbPercentage;

    if (goal === "lose") {
      proteinPercentage = 0.3;
      fatPercentage = 0.25;
      carbPercentage = 0.45;
    } else if (goal === "maintain") {
      proteinPercentage = 0.25;
      fatPercentage = 0.3;
      carbPercentage = 0.45;
    } else if (goal === "gain") {
      proteinPercentage = 0.2;
      fatPercentage = 0.25;
      carbPercentage = 0.55;
    }

    const protein = ((calories * proteinPercentage) / 4).toFixed(1);
    const fat = ((calories * fatPercentage) / 9).toFixed(1);
    const carbs = ((calories * carbPercentage) / 4).toFixed(1);

    return { protein, fat, carbs };
  };

  export default CalculateMacros;