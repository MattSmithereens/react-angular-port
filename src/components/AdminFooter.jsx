import React from 'react';
import { Link } from 'react-router-dom';


function Admin() {
  let navStyle = {
    fontFamily: 'sans-serif',
    borderTop: '2px lightgray solid',
    top: '0',
    width: '100%',
    verticalAlign: 'bottom'
  };


  return (
    <div style={navStyle}>
      <Link to='/'>Admin</Link>
    </div>
  );
}

export default Admin;
