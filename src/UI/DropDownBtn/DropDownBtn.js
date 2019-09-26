import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

import './DropDownBtn.scss';

const DropDownBtn = props => {
  const sortFunctionHandler = type => {
    console.log('here', type);
    props.sortFunction(type);
  };

  const DropDownItems = props.items
    .filter(res => res.value)
    .map((item, index) => {
      console.log('item.type :', item.type);

      return (
        <Dropdown.Item
          onClick={sortFunctionHandler(item.value)}
          key={index}
          className="drop-down-container__menu__item"
        >
          {item.value}
        </Dropdown.Item>
      );
    });

  let [BtnName] = props.items.filter(item => {
    return item.name;
  });

  return (
    <Dropdown id="drop-down-container">
      <Dropdown.Toggle className="drop-down-container__button">
        {BtnName.name}
      </Dropdown.Toggle>
      <Dropdown.Menu className="drop-down-container__menu">
        {DropDownItems}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropDownBtn;
