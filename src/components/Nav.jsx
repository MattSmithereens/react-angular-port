import React from 'react';
import { Link } from 'react-router-dom';


function Nav() {
  let navStyle = {
    fontFamily: 'sans-serif',
    position: 'absolute',
    top: '0',
    width: '100%',
    height: '100px',
    textDecoration: 'none'
  };
  let headerDiv ={
    display: 'inline-block',
    verticalAlign: 'top',
    margin: '5px',
    padding: '5px',
  };
  let divStyle = {
    display: 'inline-block',
    verticalAlign: 'top',
    margin: '5px',
    padding: '5px',
    float: 'right'
  };

  return (
    <div style={navStyle}>
      <div style={headerDiv}>
        <Link to='/'><h2>Epicodus Tunes</h2></Link>
      </div>
      <div style={divStyle}>
        <Link to='/marketplace'><h4>Marketplace</h4></Link>
      </div>
      <div style={divStyle}>
        <Link to='/about'><h4>About</h4></Link>
      </div>


      <div style={divStyle}>
        <Link to='/admin'><h4>Admin</h4></Link>
        <p>REMOVE ME LATER</p>
      </div>


    </div>
  );
}

export default Nav;
