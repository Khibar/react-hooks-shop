import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useStore } from '../../useStore/store';

import SingleItemView from '../../UI/SingleItemView/SingleItemView';
import ItemCard from '../../UI/ItemCard/ItemCard';
import ShopHeader from '../../UI/ShopHeader/ShopHeader';

import './ShopSingleItem.scss';

const ShopSingleItem = props => {
  let routeId = props.match.params.id;
  const [state, dispatch] = useStore();
  const allItems = state.products;

  const [selectedItem] = allItems.filter(item => item.id === routeId);

  const recItems = allItems.reduce((acc, item) => {
    if (item.type === selectedItem.type && acc.length < 4) {
      acc.push(item);
    }
    return acc;
  }, []);

  const recommendations = recItems.map(res => (
    <Col sm={12} md={3} key={res.id}>
      <ItemCard
        imgUrl={'../' + res.imgUrl}
        name={res.name}
        description={res.description}
        price={res.price}
        id={res.id}
      />
    </Col>
  ));

  const addItemToCart = object => {
    let payload = { ...object, quantity: 1 };
    dispatch('AddToCart', payload);
  };

  return (
    <React.Fragment>
      <ShopHeader
        heading={selectedItem.name}
        subHeading={selectedItem.description}
      />
      <Container>
        <Row>
          <SingleItemView itemData={selectedItem} addItem={addItemToCart} />
        </Row>
        <Row>
          <h1 className="shop-single-item-recommendations">
            YOU MAY ALSO LIKE
          </h1>
          {recommendations}
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default ShopSingleItem;
