import React, { useContext, useState } from 'react';
import { ItemsContext } from '../../context/ItemsContext';
import Col from 'react-bootstrap/Col';

import DropDownBtn from '../../UI/DropDownBtn/DropDownBtn';
import './Shop.scss';

const FilterPrice = [
  { value: 'Highest Price' },
  { value: 'Lowest Price' },
  { name: 'Sort By Price' }
];

const FilterCategory = [
  { value: 'Shoes' },
  { value: 'Bags' },
  { value: 'Hats' },
  { value: 'Accessories' },
  { value: 'All' },
  { name: 'Sort By Category' }
];

const Shop = props => {
  const itemData = useContext(ItemsContext).items;
  const [showItems, setShowItems] = useState(itemData);

  const FilterByCategory = category => {
    console.log('category :', category);
  };

  console.log('itemData :', itemData);
  console.log('showItems :', showItems);
  console.log('FilterByCategory :', FilterByCategory);

  return (
    <React.Fragment>
      <Col sm={12} md={12} className="shop-filter-container">
        <DropDownBtn items={FilterPrice} sortFunction={FilterByCategory} />
        <DropDownBtn items={FilterCategory} sortFunction={FilterByCategory} />
      </Col>
      <Col sm={12} md={12} className="shop-item-container">
        sljdhsdlkjh
      </Col>
    </React.Fragment>
  );
};

export default Shop;
