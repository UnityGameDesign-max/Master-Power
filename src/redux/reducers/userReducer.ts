
import { actionTypes } from "../constants/actionType";

export interface userInitialization{
  user: string;
}

const initialState = {
  user: "Tumelo Mahlangu"
};
type Action = {type: 'VIEW_USER', payload: string}


export const userReducer = (state: userInitialization = initialState, action: Action) => {
  switch (action.type){
    case actionTypes.UPDATE_USER:
        return []
    default:
      return state.user;
  }
};