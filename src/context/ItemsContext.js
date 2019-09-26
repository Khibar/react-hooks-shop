import React, { useState } from 'react';
import jsonData from '../assets/json/items.json';

console.log('jsonData :', jsonData);

export const ItemsContext = React.createContext({
  items: []
});

export default props => {
  const [itemsList, setItemsList] = useState(jsonData);
  const [cart, setCart] = useState([]);
  return (
    <ItemsContext.Provider value={{ cart: cart, items: itemsList }}>
      {props.children}
    </ItemsContext.Provider>
  );
};
