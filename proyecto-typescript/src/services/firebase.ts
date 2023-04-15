import {
  addDoc,
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { ITodo } from "../models/ITodo";
import { User } from "firebase/auth";

export const saveTodo = async (todo: ITodo, firebaseUser: User) => {
  try {
    const docRef = await addDoc(collection(getFirestore(), "todos"), {
      userId: firebaseUser.uid,
      ...todo,
    });

    console.log("Document written with ID: ", docRef.id);
  } catch (error) {
    console.error(error);
  }
};

export const getTodos = async (firebaseUser: User) => {
  const firebaseQuery = query(
    collection(getFirestore(), "todos"),
    where("userId", "==", firebaseUser.uid)
  );

  const querySnapshot = await getDocs(firebaseQuery);
  const todos: ITodo[] = [];

  querySnapshot.forEach((doc) => {
    todos.push(doc.data() as ITodo);
  });

  return todos;
};
