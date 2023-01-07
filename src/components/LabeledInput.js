import React from 'react';
import '../styles/LabeledInput.scss';

class LabeledInput extends React.Component {
  render() {
    return (
      <div className="LabeledInput">
        <label htmlFor={this.props.id}>{this.props.label}</label>
        <input type={this.props.type} id={this.props.id} />
      </div>
    );
  }
}

export default LabeledInput;
