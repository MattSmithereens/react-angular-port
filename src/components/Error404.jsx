import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Error404(props){
  let errorStyle = {
    fontFamily: 'sans-serif',
    textAlign: 'left',
    height: '75%',
    padding: '75px'
  };


  return (
    <div style={errorStyle}>
      <h2>The page {props.location.pathname} does not exist!</h2>
      <h3>Would you like to return <Link to="/">home</Link> instead?</h3>
    </div>
  );
}

Error404.propTypes = {
  location: PropTypes.object
};

export default Error404;
