import React from 'react';
import ModelTitle from './ModelTitle';

function Welcome() {
  let welcomeDivStyle = {
    height: '100%',
    backgroundImage: 'url(\'https://www.tesla.com/sites/default/files/images/homepage/20180710/ms/homepage-models.jpg?20180712a\')',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed'
  }

  return(
    <div style={welcomeDivStyle}>
      <ModelTitle/>
    </div>
  );
}

export default Welcome;
