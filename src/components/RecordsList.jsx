import React from 'react';
import Records from './Records';

function RecordsList() {

  const availableRecords = [
    {
			artist: 'Black Sabbath',
			title: 'Paranoid',
      description: 'Paranoid description'
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
    height: '100%',
    padding: '20px'
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
