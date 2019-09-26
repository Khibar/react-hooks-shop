import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Shop from '../../components/Shop/Shop';

import './ShopPage.scss';

const ShopPage = props => {
  return (
    <React.Fragment>
      <Container fluid={true} className="shop-page-fluid-container">
        <Container className="shop-page-content-container">
          <h1 className="shop-page-content-container__heading">Web Shop</h1>
          <h5 className="shop-page-content-container__sub-heading">
            Curated, Must-Have Products
          </h5>
        </Container>
      </Container>

      <Container>
        <Row>
          <Shop />
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default ShopPage;
