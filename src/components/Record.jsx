import React from 'react';
import PropTypes from 'prop-types';

function Record(props) {

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
  if (props.currentRouterPath === '/admin'){
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


Record.propTypes = {
  artist: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  currentRouterPath: PropTypes.string,
  onRecordSelection: PropTypes.func, 
  recordId: PropTypes.string,
};

export default Record;
