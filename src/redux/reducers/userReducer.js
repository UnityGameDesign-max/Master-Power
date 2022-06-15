import { actionTypes } from "../constants/actionType";

const initialState = [];

export const userReducer = (state = initialState, {type, payload}) => {
  switch (type){
    case actionTypes.ADD_USER:
      return { ...state, payload };
    case actionTypes.REMOVE_USER:
        return []
    default:
      return state;
  }
};