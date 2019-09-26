import React from 'react';

import './SideBarSortByPrice.scss';

const SideBarSortByPrice = props => {
  const onSortHandler = direction => {
    props.onPriceSort(direction);
  };

  return (
    <React.Fragment>
      <div className="side-bar-sort-by-price-container">
        <h6 className="side-bar-sort-by-price-container__heading">
          Sort by Price
        </h6>
        <h6
          onClick={() => {
            onSortHandler('HIGHEST');
          }}
          className="side-bar-sort-by-price-container__item"
        >
          Highest
        </h6>
        <h6
          onClick={() => {
            onSortHandler('LOWEST');
          }}
          className="side-bar-sort-by-price-container__item"
        >
          Lowest
        </h6>
      </div>
    </React.Fragment>
  );
};

export default SideBarSortByPrice;
