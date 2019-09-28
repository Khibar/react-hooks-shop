import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faSnapchat
} from '@fortawesome/free-brands-svg-icons';

import './Footer.scss';

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="footer-container">
        <Container>
          <Row>
            <Col sm={12} md={3}>
              <h1 className="footer-container__logo">AUTUMN</h1>
            </Col>
            <Col sm={12} md={3} className="footer-container-box">
              <h5 className="footer-container__heading">RECENT POSTS</h5>
              <div className="footer-container-post-box">
                <h6 className="footer-container-post-box__title">
                  Hugging pugs is super trendy
                </h6>
                <p className="footer-container-post-box__date">
                  February 14, 201
                </p>
              </div>
              <div className="footer-container-post-box">
                <h6 className="footer-container-post-box__title">
                  Hugging pugs is super trendy
                </h6>
                <p className="footer-container-post-box__date">
                  February 14, 2019
                </p>
              </div>
              <div className="footer-container-post-box">
                <h6 className="footer-container-post-box__title">
                  Hugging pugs is super trendy
                </h6>
                <p className="footer-container-post-box__date">
                  February 14, 2019
                </p>
              </div>
            </Col>
            <Col sm={12} md={3} className="footer-container-box">
              <h5 className="footer-container__heading">LATEST UPDATES</h5>
              <p className="footer-container__update">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                nulla, debitis dignissimos, alias dolore saepe nemo maiores
                minima aliquam, temporibus repellat! Odio mollitia non sint
                magni distinctio eaque dignissimos provident?
              </p>
              <p className="footer-container__update">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                nulla, debitis dignissimos, alias dolore saepe nemo maiores
                minima aliquam, temporibus repellat! Odio mollitia non sint
                magni distinctio eaque dignissimos provident?
              </p>
            </Col>
            <Col sm={12} md={3} className="footer-container-box">
              <h5 className="footer-container__heading">LATEST Products</h5>
              <div className="footer-container-media-box">
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="footer-container-media-box__icon"
                />
                <h6 className="footer-container-media-box__text">
                  AutumnFashion
                </h6>
              </div>
              <div className="footer-container-media-box">
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="footer-container-media-box__icon"
                />
                <h6 className="footer-container-media-box__text">#Autumn</h6>
              </div>
              <div className="footer-container-media-box">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="footer-container-media-box__icon"
                />
                <h6 className="footer-container-media-box__text">
                  AutumnFashion
                </h6>
              </div>
              <div className="footer-container-media-box">
                <FontAwesomeIcon
                  icon={faSnapchat}
                  className="footer-container-media-box__icon"
                />
                <h6 className="footer-container-media-box__text">
                  AutumnFashion
                </h6>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
