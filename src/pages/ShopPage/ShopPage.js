import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Shop from '../../components/Shop/Shop';

import './ShopPage.scss';

const ShopPage = props => {
  return (
    <React.Fragment>
      <Container fluid={true} className="shope-page-fluid-container">
        <Container>
          <Row>
            <h1>Working</h1>
          </Row>
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
