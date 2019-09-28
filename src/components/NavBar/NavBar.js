import React from 'react';
import { useStore } from '../../useStore/store';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import './NavBar.scss';

const NavBar = () => {
  const data = useStore()[0];

  let itemCounter = true;
  let basketSize = data.cartItems.length;

  return (
    <React.Fragment>
      <header className="navbar-container">
        <Container className="navbar-content-container">
          <NavLink to="/" className="navbar-content-container__heading">
            Autumn
          </NavLink>
          <div className="navbar-content-container-right-box">
            <NavLink
              to={{
                pathname: '/shop',
                state: { activeCat: false }
              }}
              className="navbar-content-container-right-box__link"
            >
              Shop
            </NavLink>
            <NavLink
              to="/collection"
              className="navbar-content-container-right-box__link"
            >
              Collection
            </NavLink>
            <NavLink
              to="/cart"
              className="navbar-content-container-right-box__cart-icon"
            >
              <FontAwesomeIcon
                icon={faShoppingCart}
                className="navbar-content-container-right-box__cart-icon__cart"
              />
              {itemCounter && (
                <span className="navbar-content-container-right-box__cart-icon__counter">
                  {basketSize}
                </span>
              )}
            </NavLink>
          </div>
        </Container>
      </header>
    </React.Fragment>
  );
};

export default NavBar;
