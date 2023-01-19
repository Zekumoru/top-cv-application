import React from 'react';
import '../styles/ListContainer.scss';
import EducationListItem from './EducationListItem';

class ListContainer extends React.Component {
  render() {
    const { list } = this.props;
    const items = [];

    list.forEach((item) => {
      items.push(<EducationListItem key={item.id} education={item} />);
    });

    return (
      <ul className="ListContainer">
        {list.length !== 0 || <div className="empty-text">List is empty.</div>}
        {items}
      </ul>
    );
  }
}

export default ListContainer;
