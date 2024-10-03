import React from 'react';


const ScrollButton = ({ scrollToRef }) => {
    const handleClick = () => {
      // Funkcja przewijania do podanej referencji
      scrollToRef.current?.scrollIntoView({ behavior: 'smooth' });
    };
  
    return (
      <button onClick={handleClick} style={buttonStyle}>
        Oblicz zapotrzebowanie
      </button>
    );
  };

  const buttonStyle = {
    backgroundColor: '#008000bd',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'flex-start',
    marginTop: '280px',
    marginLeft: '20px',
    padding: '10px 15px'
  };

  export default ScrollButton;