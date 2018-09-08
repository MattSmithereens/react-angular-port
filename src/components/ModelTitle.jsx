import React, { Componet } from 'react';
import { render } from 'react-dom';

class ModelTitle extends Component {
  constructor(props) {
    super(props);
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.state = {
      isHovering: false,
    };
  }

  handleMouseHover() {
    this.setState(this.toggleHoverState);
  }

  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering
    }
  }

  let modelStyle = {
    fontFamily: 'sans-serif',
    textAlign: 'center',
    position: 'absolute',
    top: '30%',
    width: '100%'
  }

  let buttonStyle = {
    width: '200px',
    height: '50px',
    margin: '.5%',
    borderRadius: '25px',
    border: '4px solid black',
    background: 'rgba(0, 0, 0, 0.1)',
    color: 'black',
    fontSize: '14px',
  }

  render() {
    return(
      <div style={modelStyle}>
        <div>
          <h1>Model S</h1>
        </div>
        <div>
          <button
            onMouseEnter={this.handleMouseHover}
            onMouseLeave={this.handleMouseHover}
            style={buttonStyle}>ORDER NOW
          </button>
          <button style={buttonStyle}>LEARN MORE</button>
          <button style={buttonStyle}>TEST DRIVE</button>
          <button style={buttonStyle}>SHOP INVENTORY</button>
        </div>
         {this.state.isHovering && <div>Hovering right meow! 🐱</div>}
      </div>
    );
  }
}

export default ModelTitle;
