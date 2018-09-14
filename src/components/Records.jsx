import React from 'react';
import PropTypes from 'prop-types';

function Records(props) {

  let divStyle = {
    fontFamily: 'sans-serif',
    border: '1px solid grey',
    width: '50%',
    margin: '1.25%',
    padding: '10px',
    verticalAlign: 'top',
    overflow: 'auto'
  };

  const recordInformation =
    <div style={divStyle}>
      <h3>{props.artist} - {props.title}</h3>
    </div>;
  if (props.currentRouterPath === '/marketplace'){
    return (
      <div onClick={() => {props.onRecordSelection(props.recordId);}}>
        {recordInformation}
      </div>
    );
  } else {
    return (
      <div>
        {recordInformation}
      </div>
    );
  }
}


Records.propTypes = {
  artist: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string
};

export default Records;
