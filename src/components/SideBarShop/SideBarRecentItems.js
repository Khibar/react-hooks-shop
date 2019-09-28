import React from 'react';
import { NavLink } from 'react-router-dom';

import { useStore } from '../../useStore/store';

import './SideBarRecentItems.scss';

const SideBarRecentItems = () => {
  const state = useStore()[0];
  console.log('state!@ :', state);
  const newItems = state.products.filter(item => item.isNew === true);

  const showNewItems = newItems.map(item => {
    return (
      <div className="side-bar-recent-items-container-item-box" key={item.id}>
        <NavLink
          to={'/item/' + item.id}
          className="side-bar-recent-items-container-item-box__link"
        >
          <img
            src={item.imgUrl}
            alt="item"
            className="side-bar-recent-items-container-item-box__img"
          />
          <h6 className="side-bar-recent-items-container-item-box__text side-bar-recent-items-container-item-box__text_top-item">
            {item.name}
          </h6>
          <h6 className="side-bar-recent-items-container-item-box__text">
            $ {item.price}
          </h6>
        </NavLink>
      </div>
    );
  });

  return (
    <React.Fragment>
      <div className="side-bar-recent-items-container">
        <h6 className="side-bar-recent-items-container__heading">
          Recent Items
        </h6>
        {showNewItems}
      </div>
    </React.Fragment>
  );
};

export default SideBarRecentItems;
