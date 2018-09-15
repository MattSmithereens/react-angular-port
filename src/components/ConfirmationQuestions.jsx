import React from 'react';
import PropTypes from 'prop-types';

function ConfirmationQuestions(props){
  let confirmStyle = {
    fontFamily: 'sans-serif',
    fontSize: '15px',
    padding: '75px',
    marginTop: '0',
    margin: '0 auto',
  };

  return (
    <div style={confirmStyle}>
      <p>You are in the admin section.  Continue to add a record?</p>
      <button onClick={props.onTroubleshootingConfirmation}>Yes</button>
    </div>
  );
}

ConfirmationQuestions.propTypes = {
  onTroubleshootingConfirmation: PropTypes.func
};

export default ConfirmationQuestions;
