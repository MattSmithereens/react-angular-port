import React from 'react';
import { Link } from 'react-router-dom';


function Admin() {
  let navStyle = {
    fontFamily: 'sans-serif',
    borderBottom: '2px lightgray solid',
    position: 'absolute',
    top: '0',
    width: '100%',
    height: '100px'
  };
  let imageStyle = {
    width: '70px'
  };
  let imageDiv ={
    display: 'inline-block',
    verticalAlign: 'bottom',
    margin: '5px',
    padding: '5px',
  };
  let divStyle = {
    display: 'inline-block',
    verticalAlign: 'bottom',
    margin: '5px',
    padding: '5px',
    float: 'right'
  };

  return (
    <div style={navStyle}>
      <div style={imageDiv}>
        <Link to='/'>Epicodus Tunes</Link>
      </div>
      <div style={divStyle}>
        <Link to='/schedule'><h4>Schedule</h4></Link>
      </div>
      <div style={divStyle}>
        <Link to='/produce'><h4>Produce</h4></Link>
      </div>
    </div>
  );
}

export default Admin;
