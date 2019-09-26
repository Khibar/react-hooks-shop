import React from 'react';
import './ItemCard.scss';

const ItemCard = props => {
  return (
    <div className="item-card-container">
      <img
        src={props.imgUrl}
        alt="new Item"
        className="item-card-container__img"
      ></img>

      <h5 className="item-card-container__text">{props.name}</h5>
      <h5 className="item-card-container__text">{props.description}</h5>
      <h5 className="item-card-container__text">{props.price}</h5>
    </div>
  );
};

export default ItemCard;
