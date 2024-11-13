import React from 'react';

const UserInfo = () => {
   const userInfoString = localStorage.getItem("userInfo");
   const calories = localStorage.getItem("calories");
   const userInfo = JSON.parse(userInfoString);
   const userInfoViewModel = {
      gender: null,
      age: userInfo.age,
      height: userInfo.height,
      weight: userInfo.weight,
      activity: null,
      goal: null
   };

   //gender
   if (userInfo.gender === "male") {
      userInfoViewModel.gender = "Mężczyzna";
   }
   if (userInfo.gender === "female") {
      userInfoViewModel.gender = "Kobieta";
   }

   //activity
   if (userInfo.activity === "1") {
      userInfoViewModel.activity = "Brak aktywności fizycznej";
   }
   if (userInfo.activity === "2") {
      userInfoViewModel.activity = "Lekko aktywny";
   }
   if (userInfo.activity === "3") {
      userInfoViewModel.activity = "Średnia aktywność";
   }
   if (userInfo.activity === "4") {
      userInfoViewModel.activity = "Wysoka aktywność";
   }
   if (userInfo.activity === "5") {
      userInfoViewModel.activity = "Bardzo wysoka aktywność";
   }

   //goal
   if (userInfo.goal === "lose") {
      userInfoViewModel.goal = "Utrata wagi";
   }
   if (userInfo.goal === "maintain") {
      userInfoViewModel.goal = "Utrzymanie wagi";
   }
   if (userInfo.goal === "gain") {
      userInfoViewModel.goal = "Nabieranie wagi";
   }

   // Funkcja do obliczenia makroskładników na podstawie kalorii i celu
   const calculateMacros = (calories, goal) => {
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

   const macros = calculateMacros(calories, userInfo.goal);

   return (
      <>
         <div className="userInfoContainer">
            <div className="userInfo">
               <h3 style={styles.heading}>Twoje dane:</h3>
               <p className="userInfoText">Płeć: {userInfoViewModel.gender}</p>
               <p className="userInfoText">Wiek: {userInfoViewModel.age}</p>
               <p className="userInfoText">Wzrost: {userInfoViewModel.height} cm</p>
               <p className="userInfoText">Waga: {userInfoViewModel.weight} kg</p>
               <p className="userInfoText">Poziom aktywności: {userInfoViewModel.activity}</p>
               <p className="userInfoText">Cel: {userInfoViewModel.goal}</p>
            </div>

            <div className="userInfo">
               <h3 style={styles.heading}>Zapotrzebowanie:</h3>
               <p className="userInfoText">Kalorie: {calories} kcal</p>
               <p className="userInfoText">Białko: {macros.protein} g</p>
               <p className="userInfoText">Tłuszcz: {macros.fat} g</p>
               <p className="userInfoText">Węglowodany: {macros.carbs} g</p>
            </div>
         </div>
         <h4>Teraz możesz zobaczyć swój plan tygodniowy</h4>
         <button onClick={() => window.location.href = '/weeklymenuplan'} style={styles.button}>Przejdź do planu</button>
      </>
   );
};

const styles = {
   heading: {
      borderBottom: '2px solid #e0e0e0',
      paddingBottom: '5px',
   },
   button: {
      backgroundColor: '#28a745',
      color: 'white',
      padding: '12px 20px',
      fontSize: '16px',
   },
};

export default UserInfo;
