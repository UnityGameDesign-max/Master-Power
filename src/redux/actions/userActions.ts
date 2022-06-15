import { actionTypes } from "../constants/actionType";

export const showUser = (user : string) => {
  return {
    type: actionTypes.VIEW_USER,
    payload: user,
  };
};

export const updateUser = () => { 
    return {
      type: actionTypes.UPDATE_USER,
    };
  };
