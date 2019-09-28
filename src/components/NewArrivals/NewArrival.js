import React from 'react';
import Col from 'react-bootstrap/Col';
import { useStore } from '../../useStore/store';

import ItemCard from '../../UI/ItemCard/ItemCard';

import './NewArrivals.scss';

const NewArrivals = props => {
  const newItemData = useStore()[0].products;

  const newItems = newItemData
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
  return (
    <React.Fragment>
      <h6 className="new-arrivals-heading">RECENT ARRIVALS THIS MONTH</h6>
      {newItems}
    </React.Fragment>
  );
};

export default NewArrivals;
