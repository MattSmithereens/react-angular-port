import React from 'react';

function Nav() {
  let navDivStyle = {
    position: 'fixed',
    width: '100%'
  }

  let imageDiv = {
    display: 'inline-block'
  }

  let imageStyle = {
    width: '150px'
  }

  let rightDivStyle = {
    display: 'inline-block',
    float: 'right',
    width: '25%'
  }

  let centerDivStyle = {
    width: '25%',
    display: 'inline-block',
    textAlign: 'center',
    margin: '0 20%'
  }

  let linkEle = {
    display: 'inline-block',
    margin: '1%',
    fontFamily: 'sans-serif',
    color: '#FFF'
  }

  return(
    <div style={navDivStyle}>
      <div style={imageDiv}>
        <img style={imageStyle} src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Tesla_Motors_Logo.svg/1280px-Tesla_Motors_Logo.svg.png' />
      </div>
      <div style={centerDivStyle}>
        <h4 style={linkEle} >MODEL S</h4>
        <h4 style={linkEle} >MODEL X</h4>
        <h4 style={linkEle} >MODEL 3</h4>
        <h4 style={linkEle} >ROADSTER</h4>
        <h4 style={linkEle} >ENERGY</h4>
      </div>
      <div style={rightDivStyle}>
        <h4 style={linkEle} >GET NEWSLETTER</h4>
        <h4 style={linkEle} >SHOP</h4>
        <h4 style={linkEle} >SIGN IN</h4>
      </div>
    </div>

  );
}

export default Nav;
