import React, { useState, useReducer } from 'react';
import jsonData from '../assets/json/items.json';

export const ItemsContext = React.createContext({
  items: [],
  cart: []
});

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return [...state, action.data];
    case 'REMOVE':
      return action.data;
    case 'INCREASE':
      return;
    case 'DECREASE':
      return;
    default:
      return state;
  }
};

export default props => {
  // eslint-disable-next-line
  const [itemsList, setItemsList] = useState(jsonData);

  const [cart, dispatch] = useReducer(cartReducer, []);

  const AddToCartHandler = object => {
    let alreadyAdded = cart.find(item => item.id === object.id);
    if (!alreadyAdded) {
      dispatch({ type: 'ADD', data: object });
    } else {
      dispatch({ type: 'default' });
    }
  };

  const RemoveFromCartHandler = id => {
    let withOutItem = cart.filter(item => item.id !== id);
    dispatch({ type: 'REMOVE', data: withOutItem });
  };

  return (
    <ItemsContext.Provider
      value={{
        cart: cart,
        items: itemsList,
        addToCart: AddToCartHandler,
        removeFromCart: RemoveFromCartHandler
      }}
    >
      {props.children}
    </ItemsContext.Provider>
  );
};
