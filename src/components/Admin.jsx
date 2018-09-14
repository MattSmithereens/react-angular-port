import React from 'react';
import PropTypes from 'prop-types';
import RecordsList from './RecordsList';
import RecordDetail from './RecordDetail';

function Admin(props) {
  let adminStyle = {
    fontFamily: 'sans-serif',
    fontSize: '15px',
    padding: '75px',
    marginTop: '0',
    margin: '0 auto',
  };

  let optionalSelectedRecordContent = null;
  if (props.selectedRecord != null){
    optionalSelectedRecordContent =  <RecordDetail selectedRecord={props.recordList[props.selectedRecord]}/>;
  }
  return (
    <div style={adminStyle}>
      <h2>Admin</h2>
      {optionalSelectedRecordContent}
      <RecordList
        recordList={props.recordList}
        currentRouterPath={props.currentRouterPath}
        onRecordSelection={props.onRecordSelection}/>
    </div>
  );
}

Admin.propTypes = {
  recordList: PropTypes.object,
  currentRouterPath: PropTypes.string.isRequired,
  onRecordSelection: PropTypes.func.isRequired,
  selectedRecord: PropTypes.string
};

export default Admin;
