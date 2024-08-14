import { students } from "../../mock/students";

export const InitialState = students;

export const reducer = (state, action) => {
  switch (action.type) {
    case "delete":
      return action.payload;
    default:
      return state;
  }
};
