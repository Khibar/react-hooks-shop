import React from 'react';
import { NavLink } from 'react-router-dom';
import Col from 'react-bootstrap/Col';

import './LookBook.scss';

const LookBook = props => {
  return (
    <React.Fragment>
      <Col xs={12} md={12} className="look-book-heading-container">
        <h6 className="look-book-heading-container__heading">
          FREE SHIPPING ON ALL ORDERS OVER $50 FOR THE MONTH
        </h6>
      </Col>
      <Col xs={12} md={6} className="look-book-container">
        <div className="look-book-container-box look-book-container-box_box-1">
          <NavLink to="/" exact className="look-book-container-box__link">
            <div className="look-book-container-box__inner-box">
              <h4 className="look-book-container-box__text">Autumn Lookbook</h4>
            </div>
          </NavLink>
        </div>
      </Col>
      <Col xs={12} md={6} className="look-book-container">
        <div className="look-book-container-box look-book-container-box_box-2">
          <NavLink to="/" exact className="look-book-container-box__link">
            <div className="look-book-container-box__inner-box">
              <h4 className="look-book-container-box__text">Shop Now</h4>
            </div>
          </NavLink>
        </div>
      </Col>
    </React.Fragment>
  );
};

export default LookBook;
