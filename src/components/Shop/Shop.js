import React, { useReducer, useCallback, useEffect } from 'react';
import { useStore } from '../../useStore/store';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import ItemCard from '../../UI/ItemCard/ItemCard';
import SideBarCategory from '../SideBarShop/SideBarCategory';
import SideBarSortByPrice from '../SideBarShop/SideBarSortByPrice';
import SideBarRecentItems from '../SideBarShop/SideBarRecentItems';
import SideBarReturnPolicy from '../SideBarShop/SideBarReturnPolicy';

import './Shop.scss';

const showItemsReducer = (state, action) => {
  switch (action.type) {
    case 'HIGHEST':
      return [...action.data, action.sort];
    case 'LOWEST':
      return [...action.data, action.sort];
    case 'CATEGORY':
      return action.data;
    default:
      return state;
  }
};

const Shop = props => {
  const itemData = useStore()[0].products;
  const [showItems, dispatch] = useReducer(showItemsReducer, itemData);
  const initCategory = props.initCat;

  const FilterByCategoryHandler = useCallback(
    category => {
      let filteredData = itemData;

      if (category !== 'all') {
        filteredData = itemData.filter(item => item.type === category);
      }
      dispatch({ type: 'CATEGORY', data: filteredData });
    },
    [itemData]
  );

  useEffect(() => {
    if (initCategory !== false) {
      FilterByCategoryHandler(initCategory);
    }
  }, [FilterByCategoryHandler, initCategory]);

  const SortByPriceHandler = direction => {
    let sortedData = showItems.sort((a, b) => a.price - b.price);

    if (direction !== 'LOWEST') {
      sortedData = showItems.sort((a, b) => b.price - a.price);
    }
    dispatch({
      type: direction,
      data: sortedData,
      sort: { sortedBy: direction }
    });
  };

  const renderItems = showItems.map(item => {
    return (
      <Col sm={12} md={4} key={item.id}>
        <ItemCard
          imgUrl={item.imgUrl}
          name={item.name}
          description={item.description}
          price={item.price}
          id={item.id}
        />
      </Col>
    );
  });

  return (
    <React.Fragment>
      <Col sm={12} md={3}>
        <SideBarCategory onCategoryChange={FilterByCategoryHandler} />
        <SideBarSortByPrice onPriceSort={SortByPriceHandler} />
        <SideBarRecentItems />
        <SideBarReturnPolicy />
      </Col>
      <Col sm={12} md={9}>
        <Row>{renderItems}</Row>
      </Col>
    </React.Fragment>
  );
};

export default Shop;
