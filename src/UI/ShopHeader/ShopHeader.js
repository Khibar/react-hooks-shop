import React from 'react';
import Container from 'react-bootstrap/Container';

import './ShopHeader.scss';

const ShopHeader = props => {
  return (
    <React.Fragment>
      <Container fluid={true} className="shop-header-fluid-container">
        <Container className="shop-header-content-container">
          <h1 className="shop-header-content-container__heading">
            {props.heading}
          </h1>
          <h4 className="shop-header-content-container__sub-heading">
            {props.subHeading}
          </h4>
        </Container>
      </Container>
    </React.Fragment>
  );
};

export default ShopHeader;
