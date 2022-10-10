import { configureStore } from '@reduxjs/toolkit';
import todoListSlice from '../features/todoList/todoListSlice';
import todoListApiSlice from '../features/todoListApi/todoListApiSlice';

export const store = configureStore({
  reducer: {
    todoList: todoListSlice,
    todoListApi: todoListApiSlice,
  },
})
