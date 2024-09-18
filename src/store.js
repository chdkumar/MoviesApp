import { createStore } from 'redux';

const initialState = {
  name: 'World'
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_NAME':
      return { ...state, name: action.payload };
    default:
      return state;
  }
}

const store = createStore(rootReducer);

export default store;