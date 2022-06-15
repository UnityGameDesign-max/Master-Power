import { actionTypes } from "../constants/actionType";

export const addUser = (user : string) => {
  return {
    type: actionTypes.ADD_USER,
    payload: user,
  };
};

export const removeUser = () => { 
    return {
      type: actionTypes.REMOVE_USER,
    };
  };
