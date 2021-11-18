export const INCREMENT = 'COUNT/INCREMENT';
export const DECREMENT = 'COUNT/DECREMENT';
export const RESET = 'COUNT/RESET';

export const increment = () => {
  return {
    type: INCREMENT,
  };
};

export const decrement = () => {
  return {
    type: DECREMENT,
  };
};

export const reset = () => {
  return {
    type: RESET,
  };
};
