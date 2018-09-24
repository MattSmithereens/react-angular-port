import React from 'react';
import PropTypes from 'prop-types';

function NewRecordForm(props) {
  let _artist = null;
  let _title = null;
  let _description = null;

  function handleNewRecordFormSubmission(event) {
    event.preventDefault();
    props.onNewRecordCreation({artist: _artist.value, title: _title.value, description: _description.value});
    _artist.value = '';
    _title.value = '';
    _description.value = '';
  }

  let formStyle = { //add additional styling later
    fontFamily: 'sans-serif',
    fontSize: '15px',
    padding: '75px',
    marginTop: '0',
    margin: '0 auto',
  };

  return (
    <div style={formStyle}>
      <form onSubmit={handleNewRecordFormSubmission}>
        <input
          type='text'
          id='artist'
          placeholder='Record Artist(s)'
          ref={(input) => {_artist = input;}}/>
        <input
          type='text'
          id='title'
          placeholder='Record Title'
          ref={(input) => {_title = input;}}/>
        <textarea
          id='description'
          placeholder='Record Description'
          ref={(textarea) => {_description = textarea;}}/>
        <button type='submit'>Add Record</button>
      </form>
    </div>
  );
}

NewRecordForm.propTypes = {
  onNewRecordCreation: PropTypes.func
};

export default NewRecordForm;
