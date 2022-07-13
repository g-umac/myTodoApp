import * as actionTypes from "../constant/todoConstants";

let initialState = [];

if (localStorage.getItem("todoItems")) {
  initialState = JSON.parse(localStorage.getItem("todoItems"));
}

export const todoReducer = (state = { todoItems: initialState }, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_TODO:
      const item = action.payload;
      console.log(item);

      const existItem = state.todoItems.find(
        (x) => x.todoItem._id === item.todoItem._id
      );
      console.log("existItem", ...state.todoItems);
      if (existItem) {
        console.log("existItem", existItem);

        return {
          ...state,
          error: "",
          todoItems: state.todoItems.map((x) =>
            x.todoItem._id === existItem.todoItem._id ? item : x
          ),
        };
      } else {
        return {
          ...state,
          todoItems: [...state.todoItems, item],
        };
      }

    case actionTypes.REMOVE_FROM_TODO:
      return {
        ...state,
        todoItems: state.todoItems.filter(
          (x) => x.todoItem._id !== action.payload
        ),
      };

      case actionTypes.TODO_RESET:
        return {
            ...state,
            todoItems: state.todoItems.delete(
                (x) => x.todoItem  !== action.payload
              ),
        }

        case actionTypes.EDIT_FROM_TODO:
            return {
                ...state,
               
            }
    default:
      return state;
  }
};
