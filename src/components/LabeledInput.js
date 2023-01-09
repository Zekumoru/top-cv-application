import React from 'react';
import '../styles/LabeledInput.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

class LabeledInput extends React.Component {
  render() {
    const { id, label, type } = this.props;
    let input;

    if (type === 'dropdown') {
      const { rangeFrom, rangeTo } = this.props;
      const options = [];

      for (let i = rangeTo; i >= rangeFrom; i--) {
        options.push(
          <option key={i} value={i}>
            {i}
          </option>
        );
      }

      input = (
        <div className="select-wrapper">
          <select name={id} id={id}>
            {options}
          </select>
          <FontAwesomeIcon icon={faChevronDown} className="chevron" />
        </div>
      );
    } else {
      input = <input type={type} id={id} />;
    }

    return (
      <div className="LabeledInput">
        <label htmlFor={id}>{label}</label>
        {input}
      </div>
    );
  }
}

export default LabeledInput;
