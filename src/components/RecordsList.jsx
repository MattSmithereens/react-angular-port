import React from 'react';
import Record from './Record';
import PropTypes from 'prop-types';

function RecordsList(props) {
  let recordsListStyle = {
    fontFamily: 'sans-serif',
    textAlign: 'left',
    height: '75%',
    padding: '75px'
  };

  return (
    <div style={recordsListStyle}>
      {Object.keys(props.recordsList).map(function(recordId) {
        var record = props.recordsList[recordId];
        return <Record artist={record.artist}
          title={record.title}
          description={record.description}
          currentRouterPath={props.currentRouterPath}
          key={recordId}
          recordId={recordId}
          onRecordSelection={props.onRecordSelection}/>;
      })}
    </div>  
  );
}

RecordsList.propTypes = {
  recordsList: PropTypes.object,
  currentRouterPath: PropTypes.string,
  onRecordSelection: PropTypes.func
};

export default RecordsList;
