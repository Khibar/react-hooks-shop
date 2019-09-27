import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useStore } from '../../useStore/store';
import CartList from '../../UI/CartList/CartList';

import './CartPage.scss';

const CartPage = props => {
  const cartData = useStore()[0];
  const isEmpty = false;

  const temp = [
    {
      id: '1',
      name: 'Joe',
      type: 'shoe',
      isNew: true,
      price: 39.99,
      description: 'Black Autumn Shoes',
      imgUrl: 'img/s1.jpg',
      sku: '345TRE',
      inStock: true,
      quantity: 3,
      sizes: 'XS, S, M, L, XL'
    },
    {
      id: '1khlklj',
      name: 'Joeasd',
      type: 'shoe',
      isNew: true,
      price: 39.99,
      description: 'Black Autumn Shoes',
      imgUrl: 'img/s1.jpg',
      sku: '345TRE',
      inStock: true,
      quantity: 1,
      sizes: 'XS, S, M, L, XL'
    }
  ];

  let totalPrice = temp
    .map(item => {
      let totalCost = item.quantity * item.price;
      return totalCost;
    })
    .reduce((sum, itemCost) => sum + itemCost);

  let shippingCost = 10;
  let grandTotal = totalPrice + shippingCost;

  const NoItems = (
    <div>
      <h1>No Items in Cart</h1>
      <button>Go to Shop</button>
    </div>
  );

  const CartItems = temp.map(item => {
    return (
      <Col sm={12} md={12} key={item.id} className="cart-page-list-container">
        <CartList data={item} />
      </Col>
    );
  });

  const CartTotal = (
    <Col sm={12} md={12} className="cart-page-list-cart-total-container">
      <h6 className="cart-page-list-cart-total-container__heading">
        Your Order Total
      </h6>
      <h6 className="cart-page-list-cart-total-container__item">
        Cart Total: ${totalPrice}
      </h6>
      <h6 className="cart-page-list-cart-total-container__item">
        Shipping: ${shippingCost}
      </h6>
      <h6 className="cart-page-list-cart-total-container__item">
        Order Total: ${grandTotal}
      </h6>
      <button className="cart-page-list-cart-total-container__btn">
        Proceed to checkout
      </button>
    </Col>
  );

  return (
    <React.Fragment>
      <Container fluid={true} className="cart-page-fluid-container">
        <Container className="cart-page-content-container">
          <h1 className="cart-page-content-container__heading">Cart</h1>
          <h5 className="cart-page-content-container__sub-heading">
            Available all around the world
          </h5>
        </Container>
      </Container>

      <Container>
        <Row>
          <Col sm={12} md={9}>
            {isEmpty ? NoItems : CartItems}
          </Col>
          <Col sm={12} md={3}>
            {!isEmpty && CartTotal}
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default CartPage;
