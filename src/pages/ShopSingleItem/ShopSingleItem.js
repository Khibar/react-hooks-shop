import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ItemsContext } from '../../context/ItemsContext';

import SingleItemView from '../../UI/SingleItemView/SingleItemView';
import ItemCard from '../../UI/ItemCard/ItemCard';

import './ShopSingleItem.scss';

const ShopSingleItem = props => {
  let routeId = props.match.params.id;
  const allItems = useContext(ItemsContext).items;
  const addToCart = useContext(ItemsContext).addToCart;

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
    let newObj = { ...object, quantity: 1 };
    addToCart(newObj);
  };

  return (
    <React.Fragment>
      <Container fluid={true} className="shop-single-item-fluid-container">
        <Container className="shop-single-item--content-container">
          <h1 className="shop-single-item--content-container__heading">
            {selectedItem.name}
          </h1>
          <h4 className="shop-single-item--content-container__sub-heading">
            {selectedItem.description}
          </h4>
        </Container>
      </Container>
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
