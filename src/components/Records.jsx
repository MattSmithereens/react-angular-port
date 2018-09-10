import React from 'react';
import PropTypes from 'prop-types';

function Records(records) {

  let divStyle = {
    fontFamily: 'sans-serif',
    border: '1px solid grey',
    width: '50%',
    display: 'inline-block',
    margin: '1.5%',
    padding: '10px',
    verticalAlign: 'top',
    height: '10%',
    overflow: 'auto'
  };

  return(
    <div style={divStyle}>
      <h3>{records.artist}</h3>
      <p>{records.title}</p>
      <p>{records.description}</p>
    </div>
  );
}

Records.propTypes = {
  artist: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string
};

export default Records;
