import { createSlice, nanoid } from "@reduxjs/toolkit/dist/createSlice";

const initialState = {
  todos: [{ id: 1, text: "hello World" }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
    },
    removeTodo: () => {},
  },
});
