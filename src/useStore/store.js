import { useState, useEffect } from 'react';

let globalState = {};
let listeners = [];
let actions = {};

export const useStore = () => {
  const setState = useState(globalState)[1];

  // Dispatch Actions to Update GlobalState
  const dispatch = (id, payload) => {
    // Dispatch action with given id & receive new state
    const newState = actions[id](globalState, payload);

    // merge new state with globalState
    globalState = { ...globalState, ...newState };

    // Pass new state to each setState and force
    // component re-renders
    for (const listener of listeners) {
      listener(globalState);
    }
  };

  console.log('globaleState :', globalState);
  // Add & Remove Listener when ever
  // components using useStore are mounted/unmounted
  useEffect(() => {
    listeners.push(setState);

    return () => {
      listeners = listeners.filter(li => li !== setState);
    };
  }, [setState]);

  return [globalState, dispatch];
};

// Set Initial State & Actions
export const initStore = (newActions, initialState) => {
  if (initialState) {
    globalState = { ...globalState, ...initialState };
  }

  actions = { ...actions, ...newActions };
};
