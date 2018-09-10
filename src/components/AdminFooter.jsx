import React from 'react';
import { Link } from 'react-router-dom';
//@import url('https://fonts.googleapis.com/css?family=Poppins');



function AdminFooter() {
  let navStyle = {
    fontFamily: 'Poppins, sans-serif',
    borderTop: '2px lightgray solid',
    width: '100%',
    verticalAlign: 'bottom',
    backgroundColor: '#9fc5db',
    position: 'fixed',
    bottom: '0',
    height: '60px',
    padding: '15px'

  };


  return (
    <div style={navStyle}>
      <Link to='/admin'>Admin</Link>
    </div>
  );
}

export default AdminFooter;
