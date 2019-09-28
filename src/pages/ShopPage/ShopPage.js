import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Shop from '../../components/Shop/Shop';
import ShopHeader from '../../UI/ShopHeader/ShopHeader';
import ScrollToTop from '../../assets/js/ScrollToTop';

import './ShopPage.scss';

const ShopPage = props => {
  let selectedCat = props.history.location.state.activeCat;

  return (
    <React.Fragment>
      <ScrollToTop pathname={props.history.location.pathname} />
      <ShopHeader heading="Web Shop" subHeading="Curated, Must-Have Products" />
      <Container>
        <Row>
          <Shop initCat={selectedCat} />
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default ShopPage;
