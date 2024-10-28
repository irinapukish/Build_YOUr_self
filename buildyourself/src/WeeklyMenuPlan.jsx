import React, { useState } from "react";

const TestDay = {
  data: "Poniedziałek, 22.11",
  meals: [
    {
    text:"Posiłek 1: 07:00-10:00",
      name: "Wrap z łososiem i burratą",
      imgSrc: "images/foto_przepisy/sniadanie/wrap_z_lososiem_i_burrata.png",
      kcal: {
        calories_per_100g: 496,
        protein_per_100g: 23,
        fat_per_100g: 30,
        carbohydrates_per_100g: 33,
      },
    },
    
  ],
};

const testWeek = [TestDay];

const WeeklyMenuPlan = () => {
  return (
    <div style={{display: "flex"}}>
      {testWeek.map((d) => (
        <div>
          
            <div style={boxstyle} className="day-week">{d.data}</div>

            {d.meals.map((m) => (
              <div style={container_plan}>
                <img style={imgstyle} src={m.imgSrc} />
                <div>

                <div >{m.text}</div>
                <div className="meal">{m.name}</div>
                </div>
              </div>
            ))}

            <div style={boxstyle} className="kcal">
              {d.meals.reduce((total, meal) => total + meal.kcal.calories_per_100g, 0)}
              Kcal.{" "}

              B:{" "}
              {d.meals.reduce((total, meal) => total + meal.kcal.protein_per_100g, 0)}

              T:{" "}
              {d.meals.reduce((total, meal) => total + meal.kcal.fat_per_100g, 0)}

              W:{" "}
              {d.meals.reduce((total, meal) => total + meal.kcal.carbohydrates_per_100g, 0)}
            </div>
        </div>
      ))}
    </div>
  );
};

const imgstyle={
    maxWidth: '100px',
    boxShadow: 'none'
}
const boxstyle={
    padding: '10px',
        border: '1px solid #e0e0e0',
        borderRadius: '10px',
        backgroundColor: '#f9f9f9',
        fontFamily: 'Arial, sans-serif',
        fontSize: '16px',
}
const container_plan={
    display:"flex",
    flexDirection:'row',
     alignItems:'center',
     padding: '0 10px',
     border: '1px solid #e0e0e0',
     borderRadius: '10px',
     backgroundColor: '#f9f9f9',
     fontFamily: 'Arial, sans-serif',
}
export default WeeklyMenuPlan;
