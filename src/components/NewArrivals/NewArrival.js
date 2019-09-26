import React from 'react';
import Col from 'react-bootstrap/Col';
import data from '../../assets/json/items.json';

import ItemCard from '../../UI/ItemCard/ItemCard';

import './NewArrivals.scss';

const newItems = data
  .filter(item => item.isNew === true)
  .map(res => {
    return (
      <Col sm={12} md={3} key={res.id}>
        <ItemCard
          imgUrl={res.imgUrl}
          name={res.name}
          description={res.description}
          price={res.price}
          id={res.id}
        />
      </Col>
    );
  });

const NewArrivals = props => {
  return (
    <React.Fragment>
      <h6 className="new-arrivals-heading">RECENT ARRIVALS THIS MONTH</h6>
      {newItems}
    </React.Fragment>
  );
};

export default NewArrivals;
