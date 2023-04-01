import { IComment } from "./IComment";
import { IUser } from "./IUser";

export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
  autor?: IUser;
  comentarios?: IComment[];
}

export interface IPostReponse {
  userId: number;
  id: number;
  title: string;
  body: string;
}
