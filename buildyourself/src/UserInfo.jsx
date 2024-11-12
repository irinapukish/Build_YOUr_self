import React, { useState } from 'react';

const UserInfo = () => {
  // Stany dla każdej właściwości użytkownika
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');

  return (
    <>
      <div style={styles.usercontainer}>
        <div style={styles.info}>
        <h3>Twoje dane:</h3>
        <p>Płeć:</p>
        <p>Wiek:</p>
        <p>Wzrost</p>
        <p>Waga</p>
        <p>Aktywność:</p>
        <p>Cel:</p>
      </div>
        
      <div style={styles.info}>
          <h3>Zapotrabowanie:</h3>
          <p>Kcal</p>
          <p>Białko</p>
          <p>Tłuszcz</p>
          <p>Węglowodany</p>
        </div>
        </div>
    </>
  );
};

const styles= {

  usercontainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: '30px',
    width: '400px',
    margin: '50px auto',
    padding: '30px',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Arial, sans-serif',
  },

  info:{
    display: 'flex',
    flexDirection: 'column',
    padding: '0px 10px',
    border: '1px solid rgb(224, 224, 224)',
    borderRadius: '10px',
    backgroundColor: 'rgb(249, 249, 249)',
    fontFamily: 'Arial, sans-serif',
    textDecoration: 'none',
    color: 'black',

  }
}

export default UserInfo;