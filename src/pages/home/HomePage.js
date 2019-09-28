import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { NavLink } from 'react-router-dom';

import LookBook from '../../components/LookBook/LookBook';
import NewArrivals from '../../components/NewArrivals/NewArrival';
import Categories from '../../components/Categories/Categories';
import MoreInfo from '../../components/MoreInfo/MoreInfo';

import './HomePage.scss';

const HomePage = props => {
  console.log('from home props :', props);
  return (
    <React.Fragment>
      <section className="home-page-landing-screen">
        <div className="home-page-landing-screen-content">
          <h2 className="home-page-landing-screen-content__heading">
            You In everyday life
          </h2>
          <div>
            <NavLink
              to="/collection"
              className="home-page-landing-screen-content__btn-collection"
            >
              Explore Collection
            </NavLink>
            <NavLink
              to={{ pathname: '/shop', state: { activeCat: false } }}
              className="home-page-landing-screen-content__btn-shop"
            >
              Shop
            </NavLink>
          </div>
        </div>
      </section>

      <Container className="home-page-container">
        <Row className="home-page-container__row">
          <LookBook />
        </Row>
        <Row className="home-page-container__row">
          <NewArrivals />
        </Row>
        <Row className="home-page-container__row">
          <Categories />
        </Row>
        <Row className="home-page-container__row home-page-container__row_bg-grey ">
          <MoreInfo />
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default HomePage;
