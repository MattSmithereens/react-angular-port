import React from 'react';
import Records from './Records';
import PropTypes from 'prop-types';

function RecordsList(props) {

  const availableRecords = [
    {
			artist: 'Black Sabbath',
			title: 'Paranoid',
      description: 'Paranoid description'
    },
    {
			artist: 'Iron Maiden',
			title: 'Powerslave',
      description: 'Wanna start a fight?  Say this is better than Killers'
    },
    {
			artist: 'Unruh',
			title: 'Misery Strengthened Faith',
      description: 'Unruh description'
    }
  ];

  let recordsList = {
    fontFamily: 'sans-serif',
    textAlign: 'left',
    height: '75%',
    padding: '75px'
  };

  return(
    <div style={recordsList}>
      {availableRecords.map((records, index) =>
        <Records
          artist = {records.artist}
          title = {records.title}
          description = {records.description}
          key = {index}
        />
      )}
    </div>
  );
}

export default RecordsList;
