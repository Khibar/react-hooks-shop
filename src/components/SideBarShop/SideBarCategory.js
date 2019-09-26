import React from 'react';

import './SideBarCategory.scss';

const SideBarCategory = props => {
  const categoryChangeHandler = category => {
    props.onCategoryChange(category);
  };

  return (
    <React.Fragment>
      <div className="side-bar-category-container">
        <h6 className="side-bar-category-container__heading">
          Shop by Category
        </h6>
        <h6
          onClick={() => categoryChangeHandler('shoe')}
          className="side-bar-category-container__item"
        >
          Shoes
        </h6>
        <h6
          onClick={() => categoryChangeHandler('hat')}
          className="side-bar-category-container__item"
        >
          Hats
        </h6>
        <h6
          onClick={() => categoryChangeHandler('accessory')}
          className="side-bar-category-container__item"
        >
          Accessories
        </h6>
        <h6
          onClick={() => categoryChangeHandler('bag')}
          className="side-bar-category-container__item"
        >
          Bags
        </h6>
        <h6
          onClick={() => categoryChangeHandler('all')}
          className="side-bar-category-container__item"
        >
          All
        </h6>
      </div>
    </React.Fragment>
  );
};

export default SideBarCategory;
