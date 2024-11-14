import { BrowserRouter as Router, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useAuth } from "../helpers/AuthContext";
import { buildWeeklyMenuPlan } from "../helpers/weeklyMenuPlanBuilder"

const WeeklyMenuPlan = () => {
  const { user } = useAuth();
  const [weeklyMenuPlan, setWeeklyMenuPlan] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const [requiredCalories, setRequiredCalories] = useState(null);
  const [macros, setMacros] = useState(null);

  useEffect(() => {
    setWeeklyMenuPlan(buildWeeklyMenuPlan(null, null));
  }, []);

  return (
    <div style={{ width: "100%" }}>
      {weeklyMenuPlan ? (
        <>
          <div style={{ display: "flex", paddingTop: "20px" }}>
            {weeklyMenuPlan.map((d) => (
              <div style={styles.oneday}>
                <div style={styles.boxstyle} className="day-week">
                  {d.data}
                </div>

                {d.meals.map((m) => (
                  <Link
                    to={`/mealdetailview/${m.meal.id}`}
                    style={styles.container_plan}
                  >
                    <img style={styles.imgstyle} src={m.meal.imgSrc} />
                    <div>
                      <div>{m.text}</div>
                      <div className="meal">{m.meal.name}</div>
                    </div>
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </>
      ) : (
        <>loading...</>
      )}
    </div>
  );
};

const styles = {
  oneday: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    minWidth: "300px",
    marginRight: "8px",
  },
  imgstyle: {
    maxWidth: "100px",
    boxShadow: "none",
  },
  boxstyle: {
    border: "1px solid #e0e0e0",
    borderRadius: "10px",
    backgroundColor: "#f9f9f9",
    fontFamily: "Arial, sans-serif",
    fontSize: "16px",
    padding: "10px 20px",
    display: "flex",
    flexDirection: "row",
    gap: "10px",
  },
  container_plan: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "0 10px",
    border: "1px solid #e0e0e0",
    borderRadius: "10px",
    backgroundColor: "#f9f9f9",
    fontFamily: "Arial, sans-serif",
    textDecoration: "none",
    color: "black",
  },
};

export default WeeklyMenuPlan;
