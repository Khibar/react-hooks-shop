import React, { useEffect, useCallback } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavLink } from 'react-router-dom';

import { useStore } from '../../useStore/store';
import CartList from '../../UI/CartList/CartList';
import ShopHeader from '../../UI/ShopHeader/ShopHeader';
import ScrollToTop from '../../assets/js/ScrollToTop';

import './CartPage.scss';

const CartPage = props => {
  const cartData = useStore()[0].cartItems;
  const isEmpty = useStore()[0].isEmpty;
  const shippingCost = 10;

  const TotalPrice = useCallback(() => {
    let numbers = [];
    if (isEmpty === false) {
      let totalPrice = cartData
        .map(item => {
          let totalCost = item.quantity * item.price;
          return totalCost;
        })
        .reduce((sum, itemCost) => sum + itemCost);

      let grandTotal = totalPrice + shippingCost;
      numbers.push(totalPrice.toFixed(2), grandTotal.toFixed(2));
    }
    return numbers;
  }, [cartData, isEmpty]);

  useEffect(() => {
    TotalPrice();
  }, [TotalPrice]);

  const [totalPrice, grandTotal] = TotalPrice();

  const NoItems = (
    <div className="cart-no-item-container">
      <h1 className="cart-no-item-container__heading">No Items in Cart</h1>
      <NavLink
        to={{ pathname: '/shop', state: { activeCat: false } }}
        className="cart-no-item-container__btn"
      >
        Go to Shop
      </NavLink>
    </div>
  );

  const CartItems = cartData.map(item => {
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
      <button
        onClick={() => {
          Alert();
        }}
        className="cart-page-list-cart-total-container__btn"
      >
        Proceed to checkout
      </button>
    </Col>
  );

  const Alert = () => {
    alert('Thank you for visiting this demo site');
  };

  return (
    <React.Fragment>
      <ScrollToTop pathname={props.history.location.pathname} />

      <ShopHeader heading="Cart" subHeading="Available all around the world" />
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
