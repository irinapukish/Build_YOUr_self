import React from "react";
import meals from "../helpers/database.js";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

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

const WeeklyMenuPlan = () => {
  return (
    <div style={{width: "100%"}}>
    <div style={{display: "flex", paddingTop: "20px"}}>
      {testWeek.map((d) => (
        <div style={styles.oneday}>
          
            <div style={styles.boxstyle} className="day-week">{d.data}</div>

            {d.meals.map((m) => (
              <Link  to={`/mealdetailview/${m.meal.id}`} style={styles.container_plan}>
                <img style={styles.imgstyle} src={m.meal.imgSrc} />
                <div>

                <div >{m.text}</div>
                <div className="meal">{m.meal.name}</div>
                </div>
              </Link>
            ))}

              <div style={styles.boxstyle}>
                <div style={{display:'flex', flex:'none'}}>
                  {d.meals.reduce((total, meal) => total + meal.meal.kcal.calories_per_100g, 0)}
                  Kcal{" "}
                </div>
                <div style={{display:'flex', flex:'none'}}>
                  B:{" "}
                  {d.meals.reduce((total, meal) => total + meal.meal.kcal.protein_per_100g, 0)} g
                </div>
                <div style={{display:'flex', flex:'none'}}>
                  T:{" "}
                  {d.meals.reduce((total, meal) => total + meal.meal.kcal.fat_per_100g, 0)} g
                </div>
                <div style={{display:'flex', flex:'none'}}>
                  W:{" "}
                  {d.meals.reduce((total, meal) => total + meal.meal.kcal.carbohydrates_per_100g, 0)} g
                </div>
              </div> 
        </div>
      ))}
    </div>
    </div>
  );
};

const styles = {
  oneday:{
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    minWidth: '300px',
    marginRight: '8px'
  },
  imgstyle:{
    maxWidth: '100px',
    boxShadow: 'none'
  },
  boxstyle:{
    border: '1px solid #e0e0e0',
    borderRadius: '10px',
    backgroundColor: '#f9f9f9',
    fontFamily: 'Arial, sans-serif',
    fontSize: '16px',
    padding: '10px 20px',
    display: 'flex',
    flexDirection: 'row',
    gap: '10px',
  },
  container_plan:{
    display:"flex",
    flexDirection:'row',
    alignItems:'center',
    padding: '0 10px',
    border: '1px solid #e0e0e0',
    borderRadius: '10px',
    backgroundColor: '#f9f9f9',
    fontFamily: 'Arial, sans-serif',
    textDecoration: 'none',
    color: 'black',
  }
}

export default WeeklyMenuPlan;