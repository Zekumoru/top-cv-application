import React from 'react';
import '../styles/LabeledInput.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import CamelCaseConverter from '../utils/CamelCaseConverter';

function LabeledInput({
  id,
  label,
  type,
  placeholder,
  value,
  valid,
  aggressiveValidation,
  errorText,
  showError,
  rangeFrom,
  rangeTo,
  onEnter,
  onChange,
  onBlur,
}) {
  let input;

  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      if (typeof onEnter === 'function') {
        onEnter(e);
        return;
      }

      e.preventDefault();
    }
  };

  const handleChange = (e) => {
    const key = CamelCaseConverter.fromHyphenCase(id);
    const data = {};

    data[key] = e.target.value;
    onChange({
      type: type,
      value: e.target.value,
      key,
    });
  };

  const handleBlur = (e) => {
    if (typeof handleBlur !== 'function') return;

    onBlur({
      element: e.target,
      key: CamelCaseConverter.fromHyphenCase(id),
    });
  };

  if (type === 'dropdown') {
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
        <select name={id} id={id} onChange={handleChange} value={value}>
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
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onKeyDown={onKeyDown}
        onBlur={handleBlur}
        className={!valid && (showError || aggressiveValidation) ? 'error' : ''}
      />
    );
  }

  const errorMessage =
    (!valid && aggressiveValidation) || showError ? (
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

export default LabeledInput;
