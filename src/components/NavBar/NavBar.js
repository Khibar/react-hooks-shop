import React from 'react';
import { useStore } from '../../useStore/store';
import { NavLink } from 'react-router-dom';

import './NavBar.scss';

const NavBar = () => {
  const data = useStore()[0];
  console.log('data from navbar :', data);

  let zx = data.cartItems.length;
  return (
    <React.Fragment>
      <div className="navbar-container">
        <h1> {zx}</h1>
        <NavLink to="/cart">click me</NavLink>
      </div>
    </React.Fragment>
  );
};

export default NavBar;
