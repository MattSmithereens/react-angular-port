import React, { Componet } from 'react';
import { render } from 'react-dom';

class ModelTitle extends Component {

  // let modelStyle = {
  //   fontFamily: 'sans-serif',
  //   textAlign: 'center',
  //   position: 'absolute',
  //   top: '30%',
  //   width: '100%'
  // }
  //
  // let buttonStyle = {
  //   width: '200px',
  //   height: '50px',
  //   margin: '.5%',
  //   borderRadius: '25px',
  //   border: '4px solid black',
  //   background: 'rgba(0, 0, 0, 0.1)',
  //   color: 'black',
  //   fontSize: '14px',
  // }

  render() {
    return(
      <div>
        <div>
          <h1>Model S</h1>
        </div>
        <div>
          <button>ORDER NOW
          </button>
          <button style={buttonStyle}>LEARN MORE</button>
          <button style={buttonStyle}>TEST DRIVE</button>
          <button style={buttonStyle}>SHOP INVENTORY</button>
        </div>
      </div>
    );
  }
}

export default ModelTitle;
