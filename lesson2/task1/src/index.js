import { createStore } from 'redux';

// const INCREMENT = 'COUNTER/INCREMENT';
// const DECREMENT = 'COUNTER/DECREMENT';

export const increment = {
  type: 'COUNTER/INCREMENT',
};

export const decrement = {
  type: 'COUNTER/DECREMENT',
};

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'COUNTER/INCREMENT':
      return state + 1;
    case 'COUNTER/DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

const store = createStore(counterReducer);

// store.dispatch(incrementActionCreator());
// store.dispatch(incrementActionCreator());
// store.dispatch(incrementActionCreator());
//store.dispatch(decrementActionCreator());

// console.log(store.getState());
