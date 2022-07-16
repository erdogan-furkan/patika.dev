import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getTodoAsync = createAsyncThunk("todos/getTodoAsync", async () => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_API_BASE_ENDPOINT}/todos`
  );
  return data;
});

export const addTodoAsync = createAsyncThunk(
  "todos/addTodoAsync",
  async (payload) => {
    const { data } = await axios.post(
      `${process.env.REACT_APP_API_BASE_ENDPOINT}/todos`,
      payload
    );

    return data;
  }
);

export const toggleTodoAsync = createAsyncThunk(
  "todos/toggleTodoAsync",
  async (payload) => {
    const { data } = await axios.patch(
      `${process.env.REACT_APP_API_BASE_ENDPOINT}/todos/${payload._id}`,
      payload.data
    );

    return data;
  }
);

export const removeTodoAsync = createAsyncThunk(
  "todos/removeTodoAsync",
  async (payload) => {
    const { data } = await axios.delete(
      `${process.env.REACT_APP_API_BASE_ENDPOINT}/todos/${payload._id}`
    );

    return data;
  }
);

export const clearCompletedTodosAsync = createAsyncThunk(
  "todos/clearCompletedTodosAsync",
  async () => {
    const { data } = await axios.delete(
      `${process.env.REACT_APP_API_BASE_ENDPOINT}/todos/clear/completed`
    );

    return data;
  }
);

export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    activeFilter: localStorage.getItem("active-filter") || "all",
    addTodoLoading: false,
    addTodoError: null,
  },
  reducers: {
    changeActiveFilter: (state, action) => {
      state.activeFilter = action.payload;
    },
  },
  extraReducers: {
    // get todos
    [getTodoAsync.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getTodoAsync.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
    },
    [getTodoAsync.rejected]: (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    },
    // add todo
    [addTodoAsync.pending]: (state, action) => {
      state.addTodoLoading = true;
    },
    [addTodoAsync.fulfilled]: (state, action) => {
      state.items.push(action.payload);
      state.addTodoLoading = false;
    },
    [addTodoAsync.rejected]: (state, action) => {
      state.addTodoError = action.error.message;
      state.addTodoLoading = false;
    },
    // toggle todo
    [toggleTodoAsync.fulfilled]: (state, action) => {
      const item = state.items.find((item) => item._id === action.payload._id);
      item.completed = action.payload.completed;
    },
    // remove todo
    [removeTodoAsync.fulfilled]: (state, action) => {
      state.items = action.payload;
    },
    // clear completed todos
    [clearCompletedTodosAsync.fulfilled]: (state, action) => {
      state.items = action.payload;
    },
  },
});

// selectors
export const selectTodos = (state) => state.todos.items;
export const selectActiveFilter = (state) => state.todos.activeFilter;
export const selectFilteredTodos = (state) =>
  state.todos.items.filter((item) =>
    state.todos.activeFilter === "active"
      ? !item.completed
      : state.todos.activeFilter === "completed"
      ? item.completed
      : item
  );

// actions
export const { changeActiveFilter } = todosSlice.actions;

export default todosSlice.reducer;
