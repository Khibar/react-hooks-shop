import React from 'react';
//import { NavLink } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import data from '../../assets/json/items.json';

import ItemCard from '../../UI/ItemCard/ItemCard';

import './NewArrivals.scss';

const newItems = data
  .filter(item => item.isNew === 'true')
  .map(res => {
    return (
      <Col sm={12} md={3}>
        <ItemCard
          key={res.id}
          imgUrl={res.imgUrl}
          name={res.name}
          description={res.description}
          price={res.price}
        />
      </Col>
    );
  });

console.log('data :', data);

const NewArrivals = props => {
  return (
    <React.Fragment>
      <h6 className="new-arrivals-heading">RECENT ARRIVALS THIS MONTH</h6>
      {newItems}
    </React.Fragment>
  );
};

export default NewArrivals;
