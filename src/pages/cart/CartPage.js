import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import { useStore } from '../../useStore/store';
import CartList from '../../UI/CartList/CartList';

import './CartPage.scss';

const CartPage = props => {
  const cartData = useStore()[0];
  console.log('cartData :', cartData.cartItems);

  const ItemList = () => {
    if (cartData.cartItems === false) {
      return <CartList />;
    } else {
      return <CartList />;
    }
  };

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
        <Row>{ItemList}</Row>
      </Container>
    </React.Fragment>
  );
};

export default CartPage;
