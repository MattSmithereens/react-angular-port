import React from 'react';
import NewRecordForm from './NewRecordForm';
import PropTypes from 'prop-types';

class NewRecordControl extends React.Component {

  constructor(props) {
    super(props);
  }
}

NewRecordForm.propTypes = {
  onNewRecordCreation: PropTypes.func
};

export default NewRecordForm;
