import React from 'react';
import '../styles/LabeledInput.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import CamelCaseConverter from '../utils/CamelCaseConverter';

class LabeledInput extends React.Component {
  onKeyDown = (e) => {
    if (e.key === 'Enter') {
      if (typeof this.props.onEnter === 'function') {
        this.props.onEnter(e);
        return;
      }

      e.preventDefault();
    }
  };

  onChange = (e) => {
    const key = CamelCaseConverter.fromHyphenCase(this.props.id);
    const data = {};

    data[key] = e.target.value;
    this.props.onChange({
      type: this.props.type,
      value: e.target.value,
      key,
    });
  };

  onBlur = (e) => {
    this.props.onBlur({
      element: e.target,
      key: CamelCaseConverter.fromHyphenCase(this.props.id),
    });
  };

  render() {
    const { id, label, type, valid, aggressiveValidation, errorText } =
      this.props;
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
          <select
            name={id}
            id={id}
            onChange={this.onChange}
            value={this.props.value}
          >
            {options}
          </select>
          <FontAwesomeIcon icon={faChevronDown} className="chevron" />
        </div>
      );
    } else {
      input = (
        <input
          type={type}
          id={id}
          value={this.props.value}
          onChange={this.onChange}
          onKeyDown={this.onKeyDown}
          onBlur={this.onBlur}
          className={!valid && aggressiveValidation ? 'error' : ''}
        />
      );
    }

    const errorMessage =
      !valid && aggressiveValidation ? (
        <p className="error-message">{errorText || 'Invalid input!'}</p>
      ) : null;
    return (
      <div className="LabeledInput">
        <label htmlFor={id}>{label}</label>
        {input}
        {errorMessage}
      </div>
    );
  }
}

export default LabeledInput;
