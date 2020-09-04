import {createStore} from 'redux';

const initialState = {
  count: 0,
};
const reducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case 'INCREMENT':
      return {count: state.count + payload.num};

    default:
      return state;
  }
  //   console.log(payload);
  //   return state;
};

export default createStore(reducer);
