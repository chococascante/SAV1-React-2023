import { IAction } from "../../models/IAction";
import { IUser } from "../../models/IUser";
import { ADD_USER, UPDATE_USERS } from "../actions";

export interface IUserReducer {
  users: IUser[];
}

const initialState: IUserReducer = {
  users: [],
};

export const userReducer = (
  state = initialState,
  { type, payload }: IAction
): IUserReducer => {
  switch (type) {
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, payload as IUser],
      };
    case UPDATE_USERS:
      return {
        ...state,
        users: payload as IUser[],
      };
    default:
      return state;
  }
};
