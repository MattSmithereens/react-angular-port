import React from 'react';
import Records from './Records';
import PropTypes from 'prop-types';

function RecordsList(props) {
  let recordsList = {
    fontFamily: 'sans-serif',
    textAlign: 'left',
    height: '75%',
    padding: '75px'
  };

  return (
    <div>
      <hr/>
      {Object.keys(props.recordsList).map(function(recordId) {
        var record = props.recordsList[recordId];
        return <Record names={record.names}
          location={record.location}
          issue={record.issue}
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
