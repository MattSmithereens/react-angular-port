import React from 'react';

function Welcome() {
  let welcomeStyle = {
    fontFamily: 'sans-serif',
    padding: '75px',
    verticalAlign: 'top',
  };

  return (
    <div  style={welcomeStyle} >
      <h1>Epicodus Tunes</h1>
      <p>Welcome to our store</p>
    </div>
  );
}

export default Welcome;
