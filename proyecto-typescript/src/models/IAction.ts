import { ITodo } from "./ITodo";

export interface IAction {
  type: string;
  payload: ITodo[] | ITodo;
}
