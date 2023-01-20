import React from 'react';
import '../styles/LabeledInput.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import CamelCaseConverter from '../utils/CamelCaseConverter';

const EMAIL_REGEX = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
const PHONE_NUMBER_REGEX =
  /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

class LabeledInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      invalid: false,
      aggressive: false,
    };
  }

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
    const data = {};
    data[CamelCaseConverter.fromHyphenCase(this.props.id)] = e.target.value;

    this.props.onChange(data);
    this.validate(e.target.value);
  };

  onBlur = (e) => {
    this.setState({ aggressive: true }, () => this.validate(e.target.value));
  };

  validate(input) {
    if (!this.state.aggressive) return;

    let invalid = false;
    if (this.props.type === 'email') {
      invalid = !EMAIL_REGEX.test(input);
    } else if (this.props.type === 'tel') {
      invalid = !PHONE_NUMBER_REGEX.test(input);
    }

    this.setState({ invalid });
  }

  render() {
    const { id, label, type } = this.props;
    const { invalid } = this.state;
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
            className={invalid ? 'error' : ''}
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
          className={invalid ? 'error' : ''}
        />
      );
    }

    return (
      <div className="LabeledInput">
        <label htmlFor={id}>{label}</label>
        {input}
        {!invalid || <p className="error-message">Invalid input</p>}
      </div>
    );
  }
}

export default LabeledInput;
