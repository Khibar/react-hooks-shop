import React from 'react';
import Col from 'react-bootstrap/Col';
import { NavLink } from 'react-router-dom';

import './Categories.scss';

const Categories = props => {
  return (
    <React.Fragment>
      <Col sm={12} md={6} className="categories-container">
        <NavLink to="/" className="categories-container__link">
          <img
            src="img/shoes.jpg"
            alt="shoes category"
            className="categories-container__img"
          ></img>
          <h4 className="categories-container__text">Shoes</h4>
        </NavLink>
      </Col>
      <Col sm={12} md={6} className="categories-container">
        <NavLink to="/" className="categories-container__link">
          <img
            src="img/hats.jpg"
            alt="hats category"
            className="categories-container__img"
          ></img>
          <h4 className="categories-container__text">Hats</h4>
        </NavLink>
      </Col>
      <Col sm={12} md={6} className="categories-container">
        <NavLink to="/" className="categories-container__link">
          <img
            src="img/acs.jpg"
            alt="accessories category"
            className="categories-container__img"
          ></img>
          <h4 className="categories-container__text">accessories</h4>
        </NavLink>
      </Col>
      <Col sm={12} md={6} className="categories-container">
        <NavLink to="/" className="categories-container__link">
          <img
            src="img/bags.jpg"
            alt="bgs category"
            className="categories-container__img"
          ></img>
          <h4 className="categories-container__text">Bags</h4>
        </NavLink>
      </Col>
    </React.Fragment>
  );
};

export default Categories;
