import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import LookBook from '../../components/LookBook/LookBook';
import NewArrivals from '../../components/NewArrivals/NewArrival';
import Categories from '../../components/Categories/Categories';
import MoreInfo from '../../components/MoreInfo/MoreInfo';
//import data from '../../assets/json/items.json';

import './HomePage.scss';

const HomePage = props => {
  return (
    <React.Fragment>
      <section className="home-page-landing-screen">
        <div className="home-page-landing-screen-content">
          <h2 className="home-page-landing-screen-content__heading">
            You In everyday life
          </h2>
          <div>
            <button className="home-page-landing-screen-content__btn-collection">
              Explore Collection
            </button>
            <button className="home-page-landing-screen-content__btn-shop">
              Shop
            </button>
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
