import React from 'react';
import { Route, Link } from 'react-router-dom';

function AdminFooter() {
  let navStyle = {
    fontFamily: 'Poppins, sans-serif',
    borderTop: '2px lightgray solid',
    width: '100%',
    verticalAlign: 'bottom',
    backgroundColor: '#9fc5db',
    position: 'fixed',
    bottom: '0',
    height: '25px',
    padding: '15px'

  };


  return (
    <div style={navStyle}>
      <Link to='/admin'>Admin</Link>
    </div>
  );
}

export default AdminFooter;
