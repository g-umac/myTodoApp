import { createStore, combineReducers, applyMiddleware,compose } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from '@redux-devtools/extension';
import {todoReducer} from './reducer/todoReducer'
 


const middleware = [thunk];
const initialState ={
 
  todo: {
    todoItems: localStorage.getItem('todoItems')
      ? JSON.parse(localStorage.getItem('todoItems'))
      : []
   
  },
}
const reducer = combineReducers({
   todos:todoReducer
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware, thunk))
);

export default store;