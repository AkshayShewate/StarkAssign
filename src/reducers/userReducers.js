import { ADD_USER_DATA } from "../actions/types";

export default function (state = {}, action) {
  switch (action.type) {
    case ADD_USER_DATA:
      return { ...state, items: action.payload.userDATA };

    default:
      return state;
  }
}