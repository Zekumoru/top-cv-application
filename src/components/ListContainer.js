import React from 'react';
import '../styles/ListContainer.scss';

class ListContainer extends React.Component {
  render() {
    return (
      <div className="ListContainer">
        <div className="empty-text">List is empty.</div>
      </div>
    );
  }
}

export default ListContainer;
