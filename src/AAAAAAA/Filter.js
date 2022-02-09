// You can live edit this code below the import statements
import React from 'react';
import Fade from 'react-reveal/Fade';

class FadeExample extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { show: false };
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    this.setState({ show: !this.state.show });
  }

  render() {
    return (
      <h1>
        <Fade left cascade collapse when={this.state.show}>
          React Reveal
        </Fade>
        <button
          className="btn btn-success my-5"
          type="button"
          onClick={this.handleClick}
        >
          { this.state.show ? 'Hide' : 'Show' } Message
        </button>
      </h1>
    );
  }
}

export default FadeExample;