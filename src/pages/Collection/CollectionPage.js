import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import { useStore } from '../../useStore/store';
import ShopHeader from '../../UI/ShopHeader/ShopHeader';
import ScrollToTop from '../../assets/js/ScrollToTop';

import './CollectionPage.scss';

const CollectionPage = props => {
  const products = useStore()[0].products;

  const ImgList = products.map(item => {
    return (
      <Col sm={12} md={3} className="collection-img-list">
        <NavLink to={'/item/' + item.id} className="collection-img-list__link">
          <Image
            src={item.imgUrl}
            rounded
            fluid
            className="collection-img-list__img"
          />
        </NavLink>
      </Col>
    );
  });

  return (
    <React.Fragment>
      <ScrollToTop />
      <ShopHeader heading="Collection" subHeading="A New Autumn, A New Look" />
      <Container>
        <Row>{ImgList}</Row>
      </Container>
    </React.Fragment>
  );
};

export default CollectionPage;
