import { SET_ALERT, REMOVE_ALERT } from "../actions/types.js";

// alerts would be in an array
const initialState = [];

// exports an action an payload
export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_ALERT:
      return [...state, payload];
    case REMOVE_ALERT:
      return state.filter((alert) => alert.id !== payload);
    default:
      return state;
  }
}