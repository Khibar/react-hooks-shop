import { initStore } from './store';

const configureCartStore = () => {
  const actions = {
    AddToCart: (currentState, object) => {
      let exists = currentState.cartItems.find(item => item.id === object.id);
      let updateState = [];

      if (exists) {
        updateState = [...currentState.cartItems];
      } else {
        updateState = [...currentState.cartItems, object];
      }

      return { cartItems: updateState };
    },
    RemoveFromCart: (currentState, id) => {
      let reducedCart = currentState.cartItems.filter(item => item.id !== id);
      return { cartItems: reducedCart };
    },
    IncreaseAmount: (currentState, id) => {
      let item = currentState.cartItems.find(item => item.id === id);
      // eslint-disable-next-line
      let increase = ++item.quantity;
    },
    DecreaseAmount: (currentState, id) => {
      let item = currentState.cartItems.find(item => item.id === id);
      // eslint-disable-next-line
      let decrease = --item.quantity;
    }
  };
  initStore(actions, { cartItems: false });
};

export default configureCartStore;
