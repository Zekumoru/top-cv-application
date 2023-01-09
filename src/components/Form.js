import React from 'react';
import '../styles/Form.scss';

class Form extends React.Component {
  render() {
    return (
      <form className="Form">
        <h1 className="title">{this.props.title}</h1>
        {this.props.content}
        <div className="buttons">
          <button className="primary next-btn">Next</button>
        </div>
      </form>
    );
  }
}

export default Form;
