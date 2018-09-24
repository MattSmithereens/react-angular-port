import React from 'react';
import PropTypes from 'prop-types';

function RecordDetail(props){
  return (
    <div>
      <hr/>
      <h1>{props.selectedRecord.artist} - {props.selectedRecord.title}</h1>
      <h4><em>{props.selectedRecord.description}</em></h4>
      <hr/>
    </div>
  );
}

RecordDetail.propTypes = {
  selectedRecord: PropTypes.object
};

export default RecordDetail;
