import React from 'react';
import '../styles/Form.scss';

class FormClass extends React.Component {
  render() {
    const {
      title,
      content,
      pageIndex,
      lastPage,
      onPreviousPage,
      onNextPage,
      className,
    } = this.props;

    let prevBtn = null;
    if (pageIndex > 0) {
      prevBtn = (
        <button className="prev-btn" onClick={onPreviousPage}>
          Prev
        </button>
      );
    }

    return (
      <form className={`Form ${className}`}>
        <h1 className="title">{title}</h1>
        {content}
        <div className="buttons">
          {prevBtn}
          <button className="primary" onClick={onNextPage}>
            {lastPage ? 'Finish' : 'Next'}
          </button>
        </div>
      </form>
    );
  }
}

export default FormClass;
