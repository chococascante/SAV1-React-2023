import { ITodo } from "./ITodo";
import { IUser } from "./IUser";

export interface IAction {
  type: string;
  payload: ITodo[] | ITodo | IUser | IUser[];
}
