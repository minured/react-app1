import * as constants from "./constants";

// 初始化默认的 state
const defaultState = {
  mtData: null,
};

export default (state = defaultState, action) => {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case constants.SET_DATA:
      newState.myData = action.data;
      return newState;
    default:
      return state;
  }
};
