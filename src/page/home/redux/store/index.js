
import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../reducers/todo';
import yeuthichReducer from '../reducers/yeuthichReducer';


export default configureStore({
  reducer: {
    listTodo: todoReducer,
    listYeuthich: yeuthichReducer,

  },
});
