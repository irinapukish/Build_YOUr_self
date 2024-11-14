import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../helpers/AuthContext";
import CalculateCalories from "../helpers/caloriesCalculator";
import CalculateMacros from "../helpers/macrosCalculator";
import { convertUserInfoDtoToUserInfo, convertUserInfoToUserInfoViewModel} from "../helpers/modelConverterCommonHelper"

const UserInfo = () => {
  const { user } = useAuth();
  const userInfoString = localStorage.getItem("userInfo");
  const [userInfo, setUserInfo] = useState(JSON.parse(userInfoString));
  const [userInfoViewModel, setUserInfoViewModel] = useState(null);
  const [calories, setCalories] = useState(null);
  const [macros, setMacros] = useState(null);

  console.log(userInfo);


  async function saveUserInfo() {
    try {
      console.log("userInfo");
      console.log(userInfo);
      const response = await axios.post(
        "http://localhost:5001/saveuserdata",
        userInfo,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      localStorage.removeItem("userInfo");
      localStorage.removeItem("calories");
    } catch (error) {
      console.error("There was an error!", error);
      alert("error");
    }
  }

  async function getUserInfo() {
    try {
      const response = await axios.get("http://localhost:5001/getuserdata", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      console.log(response.data);
      setUserInfo(convertUserInfoDtoToUserInfo(response.data));
      setUserInfoViewModel(convertUserInfoToUserInfoViewModel(response.data));
    } catch (error) {
      console.error("There was an error!", error);
    }
  }

  useEffect(() => {
    if (userInfo) {
      saveUserInfo();
      setUserInfoViewModel(convertUserInfoToUserInfoViewModel(userInfo));
    } else {
      getUserInfo();
    }
  }, []);

  useEffect(() => {
    if (userInfo) {
      console.log(userInfo, "userInfo");
      const calories = CalculateCalories(
        userInfo.weight,
        userInfo.height,
        userInfo.age,
        userInfo.gender,
        userInfo.goal,
        userInfo.activity
      );
      setCalories(calories);
      setMacros(CalculateMacros(calories, userInfo.goal));
    }
  }, [userInfo]);

  return (
    <>
      <div className="userInfoContainer">
        <div className="userInfo">
          <h3 style={styles.heading}>Twoje dane:</h3>
          <p className="userInfoText">Płeć: {userInfoViewModel?.gender}</p>
          <p className="userInfoText">Wiek: {userInfoViewModel?.age}</p>
          <p className="userInfoText">Wzrost: {userInfoViewModel?.height} cm</p>
          <p className="userInfoText">Waga: {userInfoViewModel?.weight} kg</p>
          <p className="userInfoText">
            Poziom aktywności: {userInfoViewModel?.activity}
          </p>
          <p className="userInfoText">Cel: {userInfoViewModel?.goal}</p>
        </div>

        <div className="userInfo">
          <h3 style={styles.heading}>Zapotrzebowanie:</h3>
          <p className="userInfoText">Kalorie: {calories} kcal</p>
          <p className="userInfoText">Białko: {macros?.protein} g</p>
          <p className="userInfoText">Tłuszcz: {macros?.fat} g</p>
          <p className="userInfoText">Węglowodany: {macros?.carbs} g</p>
        </div>
      </div>
      <h4>Teraz możesz zobaczyć swój plan tygodniowy</h4>
      <button
        onClick={() => (window.location.href = "/weeklymenuplan")}
        style={styles.button}
      >
        Przejdź do planu
      </button>
    </>
  );
};

const styles = {
  heading: {
    borderBottom: "2px solid #e0e0e0",
    paddingBottom: "5px",
  },
  button: {
    backgroundColor: "#28a745",
    color: "white",
    padding: "12px 20px",
    fontSize: "16px",
  },
};

export default UserInfo;
