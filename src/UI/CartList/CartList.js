import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMinusCircle,
  faPlusCircle,
  faBan
} from '@fortawesome/free-solid-svg-icons';
import { useStore } from '../../useStore/store';

import './CartList.scss';

const CartList = props => {
  const dispatch = useStore()[1];
  const totalPrice = props.data.quantity * props.data.price;
  const fixedTotalPrice = totalPrice.toFixed(2);
  const moreThanOne = props.data.quantity > 1 ? true : false;

  const removeItem = () => {
    dispatch('RemoveFromCart', props.data.id);
  };

  const IncreaseQuantity = () => {
    dispatch('IncreaseAmount', props.data.id);
  };

  const DecreaseQuantity = () => {
    dispatch('DecreaseAmount', props.data.id);
  };

  return (
    <React.Fragment>
      <div className="cart-item-list-container">
        <div className="cart-item-list-container-delete-box">
          <FontAwesomeIcon
            onClick={() => {
              removeItem();
            }}
            icon={faBan}
            className="cart-item-list-container-delete-box__icon"
          />
        </div>
        <div className="cart-item-list-container-img-box">
          <img
            src={props.data.imgUrl}
            alt="item"
            className="cart-item-list-container-img-box__img"
          />
        </div>
        <div className="cart-item-list-container-name-box">
          <h6 className="cart-item-list-container-name-box__name">
            {props.data.name} - {props.data.description}
          </h6>
        </div>
        <div className="cart-item-list-container-quantity-box">
          {moreThanOne && (
            <FontAwesomeIcon
              onClick={() => {
                DecreaseQuantity();
              }}
              icon={faMinusCircle}
              className="cart-item-list-container-quantity-box__icon"
            />
          )}
          <h6 className="cart-item-list-container-quantity-box__quantity">
            {props.data.quantity}
          </h6>
          <FontAwesomeIcon
            onClick={() => {
              IncreaseQuantity();
            }}
            icon={faPlusCircle}
            className="cart-item-list-container-quantity-box__icon"
          />
        </div>
        <div className="cart-item-list-container-price-box">
          <h6 className="cart-item-list-container-price-box__price">
            ${fixedTotalPrice}
          </h6>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CartList;
