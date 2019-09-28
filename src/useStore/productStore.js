import { initStore } from './store';
import data from '../assets/json/items.json';

const configureProductStore = () => {
  const actions = {};
  initStore(actions, { products: data });
};

export default configureProductStore;
