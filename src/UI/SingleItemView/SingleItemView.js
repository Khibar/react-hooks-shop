import React from 'react';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import './SingleItemView.scss';

const SingleItemView = props => {
  const addToCartHandler = () => {
    props.addItem(props.itemData);
  };

  return (
    <React.Fragment>
      <Col sm={12} md={4}>
        <Image
          src={'../' + props.itemData.imgUrl}
          alt="new Item"
          className="single-item-img"
          fluid
        ></Image>
      </Col>
      <Col
        sm={12}
        md={{ span: 7, offset: 1 }}
        className="single-item-container"
      >
        <h2 className="single-item-container__heading">
          {props.itemData.name}
        </h2>
        <h2 className="single-item-container__heading">
          {props.itemData.description}
        </h2>
        <h2 className="single-item-container__price">
          $ {props.itemData.price}
        </h2>
        <p className="single-item-container__description">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis.
        </p>
        <h4 className="single-item-container__info">
          Sizes: {props.itemData.sizes}
        </h4>
        <h4 className="single-item-container__info">
          SKU: {props.itemData.sku}
        </h4>
        {props.itemData.inStock && (
          <h4 className="single-item-container__info single-item-container__info_last-item">
            Availability: In Stock
          </h4>
        )}
        <button
          onClick={() => {
            addToCartHandler();
          }}
          className="single-item-container__btn"
        >
          Add to Cart
        </button>
      </Col>
    </React.Fragment>
  );
};

export default SingleItemView;
