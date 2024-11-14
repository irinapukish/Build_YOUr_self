import meals from "../helpers/database.js";


const DayOne = {
  data: "Poniedziałek, 22.11",
  meals: [
    {
      text:"Posiłek 1: 07:00-10:00",
      meal:  meals[0],
    },
    {
      text:"Posiłek 2: 12:00-15:00",
      meal: meals[1],
    },
    {
      text:"Posiłek 3: 17:00-21:00",
      meal: meals[2],
    },
  ],
};
const DayTwo = {
  data: "Wtorek, 23.11",
  meals: [
    {
      text:"Posiłek 1: 07:00-10:00",
      meal: meals[3],
    },
    {
      text:"Posiłek 2: 12:00-15:00",
        meal: meals[4],
      },
      {
        text:"Posiłek 3: 17:00-21:00",
          meal: meals[5]
        },
  ],
};
const DayThree = {
  data: "Środa, 24.11",
  meals: [
    {
      text:"Posiłek 1: 07:00-10:00",
      meal: meals[6],
    },
    {
      text:"Posiłek 2: 12:00-15:00",
        meal: meals[7],
      },
      {
        text:"Posiłek 3: 17:00-21:00",
          meal: meals[8],
        },
  ],
};
const DayFour = {
  data: "Czwartek, 25.11",
  meals: [
    {
      text:"Posiłek 1: 07:00-10:00",
      meal: meals[9],
    },
    {
      text:"Posiłek 2: 12:00-15:00",
        meal: meals[10],
      },
      {
        text:"Posiłek 3: 17:00-21:00",
          meal: meals[11],
      },
  ],
};
const DayFive = {
  data: "Piątek, 26.11",
  meals: [
    {
      text:"Posiłek 1: 07:00-10:00",
      meal: meals[12],
    },
    {
      text:"Posiłek 2: 12:00-15:00",
       meal: meals[13],
      },
      {
        text:"Posiłek 3: 17:00-21:00",
          meal: meals[14],
    },
  ],
};
const DaySix = {
  data: "Sobota, 27.11",
  meals: [
    {
      text:"Posiłek 1: 07:00-10:00",
      meal: meals[15],
    },
    {
      text:"Posiłek 2: 12:00-15:00",
        meal: meals[16],
      },
      {
        text:"Posiłek 3: 17:00-21:00",
          meal: meals[17],
        },
  ],
};
const DaySeven = {
  data: "Niedziela, 27.11",
  meals: [
    {
      text:"Posiłek 1: 07:00-10:00",
      meal: meals[18],
    },
    {
      text:"Posiłek 2: 12:00-15:00",
      meal: meals[19],
    },
    {
      text:"Posiłek 3: 17:00-21:00",
      meal: meals[20],
    },
  ],
};
const testWeek = [DayOne, DayTwo, DayThree, DayFour, DayFive, DaySix, DaySeven];
const daysOfWeek = ["Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota", "Niedziela"]
const timesOfDay = ["Posiłek 1: 07:00-10:00", "Posiłek 2: 12:00-15:00", "Posiłek 3: 17:00-21:00"]

export const getMealTotalWeight = (meal) => {
  const totalWeight = meal.ingridients.reduce((total, ingridient) => total + ingridient.mass, 0);
  return totalWeight;
}

export const getMealCalority = (meal) => {
  const totalMass =getMealTotalWeight(meal);
  const calority = (totalMass / 100) * meal.kcal.calories_per_100g;
  return calority;
}

export const buildWeeklyMenuPlan = (requiredCalories, requiredMacros) => {
  const mealsWithCalorityDelta = meals.reduce((resultDict, meal) => {
    const mealCalority = getMealCalority(meal);
    const mealCalorityDelta = Math.abs((requiredCalories / 3) - mealCalority);

    resultDict[mealCalorityDelta] = meal;
  
    return resultDict;
  });


  console.log(requiredCalories, "requiredCalories");
  console.log(mealsWithCalorityDelta);

  return testWeek;
};
