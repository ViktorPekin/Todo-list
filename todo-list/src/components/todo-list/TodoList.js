import TodoItem from "../todo-item/TodoItem";
import { useDispatch, useSelector } from 'react-redux';
import { useState } from "react";
import { addTodo } from "../../features/todoList/todoListSlice";
import { v4 } from 'uuid';

const TodoList = () => {
  const todos = useSelector((state) => state.todoList.todos);
  const [todoValue, setTodoValue] = useState('');
  const dispatch = useDispatch();

  const addTodoHandler = () => {
    const todo = {
      id: v4(),
      title: todoValue,
      complited: false,
    }
    dispatch(addTodo(todo))
    setTodoValue('');
  }

  const submitHandler = (e) => {
    e.preventDefault();
    addTodoHandler();
  }

  return(
    <main className="todo-list">
      <form onSubmit={submitHandler} className="todo-list__form">
        <input value={todoValue} onChange={e => setTodoValue(e.target.value)} type="text" className="todo-list__input"></input>
        <button className="todo-list__button"></button>
      </form>
      <ul className="todo-list__container">
        {todos?.map((todo) => (
          <TodoItem value={todo} key={v4()}/>
        ))}
      </ul>
    </main>
  )
}

export default TodoList;
