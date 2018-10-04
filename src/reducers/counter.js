import { UPDATE_COUNTER, UPDATE_COMPLETE } from "../actions/counterActions";

const initialState = 0;

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_COUNTER:
      console.log("something 1");
      return state;

    case UPDATE_COMPLETE:
      console.log("something 2");
      return state + action.payload;

    default:
      return state;
  }
};
