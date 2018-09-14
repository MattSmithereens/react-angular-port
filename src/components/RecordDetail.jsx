import React from 'react';
import PropTypes from 'prop-types';

function RecordDetail(props){
  return (
    <div>
      <hr/>
      <h1>{props.selectedRecord.names} - {props.selectedRecord.location}</h1>
      <h4><em>{props.selectedRecord.issue}</em></h4>
      <hr/>
    </div>
  );
}

RecordDetail.propTypes = {
  selectedRecord: PropTypes.object
};

export default RecordDetail;
