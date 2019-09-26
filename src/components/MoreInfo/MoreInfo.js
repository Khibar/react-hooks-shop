import React from 'react';
import Col from 'react-bootstrap/Col';

import './MoreInfo.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShoppingCart,
  faShippingFast,
  faQuestionCircle,
  faUndo
} from '@fortawesome/free-solid-svg-icons';

const MoreInfo = props => {
  return (
    <React.Fragment>
      <Col sm={6} md={3} className="more-info-container">
        <div className="more-info-container-box">
          <FontAwesomeIcon
            icon={faShoppingCart}
            className="more-info-container-box__icon"
          />
          <h6 className="more-info-container-box__text">Shop Range</h6>
        </div>
      </Col>
      <Col sm={6} md={3} className="more-info-container">
        <div className="more-info-container-box">
          <FontAwesomeIcon
            icon={faShippingFast}
            className="more-info-container-box__icon"
          />
          <h6 className="more-info-container-box__text">Shipping Info</h6>
        </div>
      </Col>
      <Col sm={6} md={3} className="more-info-container">
        <div className="more-info-container-box">
          <FontAwesomeIcon
            icon={faQuestionCircle}
            className="more-info-container-box__icon"
          />
          <h6 className="more-info-container-box__text">FAQ</h6>
        </div>
      </Col>
      <Col sm={6} md={3} className="more-info-container">
        <div className="more-info-container-box">
          <FontAwesomeIcon
            icon={faUndo}
            className="more-info-container-box__icon"
          />
          <h6 className="more-info-container-box__text">Return Policy</h6>
        </div>
      </Col>
    </React.Fragment>
  );
};

export default MoreInfo;
