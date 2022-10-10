import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  todosApi: [],
}

export const getTodo = createAsyncThunk(
  "todoListApi/getTodo", async (_, {rejectWithValue, dispatch}) => {
    fetch('https://jsonplaceholder.typicode.com/todos').then((res) => res.json()).then((res) => dispatch(setTodoListApi(res)))
  }
)

export const todoListApiSlice = createSlice({
  name: 'todoListApi',
  initialState,
  reducers: {
    setTodoListApi: (state, action) => {
      state.todosApi = action.payload
    },
    removeTodoApi: (state, action) => {
      state.todosApi = state.todosApi.filter((todo) => todo.id !== action.payload);
    },
  },
  extraReducers: {
    [getTodo.fulfilled]: () => console.log('end'),
    [getTodo.pending]: () => console.log('start'),
    [getTodo.rejected]: () => console.log('err'),
  }
})

export const {setTodoListApi , removeTodoApi} = todoListApiSlice.actions;

export default todoListApiSlice.reducer;
