import * as actionTypes from "../constant/todoConstants";

export const addToTodo = (todoItem) => async (dispatch, getState) => {
  dispatch({
    type: actionTypes.ADD_TO_TODO,
    payload: {
      todoItem,
    },
  });

  localStorage.setItem("todoItems", JSON.stringify(getState().todo.todoItems));
};

export const removeFromTodo = (todoId) => (dispatch, getState) => {
  dispatch({ type: actionTypes.REMOVE_FROM_TODO, payload: todoId });
  localStorage.setItem("todoItems", JSON.stringify(getState().todo.todoItems));
};

export const editFromTodo = (todoId) => (dispatch, getState) => {
  dispatch({ type: actionTypes.EDIT_FROM_TODO, payload: todoId });
  localStorage.setItem("todoItems", JSON.stringify(getState().todo.todoItems));
};

export const deleteAllTodo = (todo) => (dispatch, getState) => {
  dispatch({ type: actionTypes.TODO_RESET, payload: todo });
  localStorage.setItem("todoItems", JSON.stringify(getState().todo.todoItems));
};
