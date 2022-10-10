import { useDispatch } from "react-redux";
import { toggleComplitedTodo } from '../../features/todoList/todoListSlice';
import { removeTodo } from "../../features/todoList/todoListSlice";
import { removeTodoApi } from "../../features/todoListApi/todoListApiSlice";
import { addTodo } from "../../features/todoList/todoListSlice";
import { v4 } from 'uuid';

const TodoItem = ({ value, apiTodo }) => {
  const dispatch = useDispatch();

  const toggleTodoHandler = (id) => {
    if (apiTodo) {
      addTodoHandler();
      dispatch(removeTodoApi(id));
     } else  {
      dispatch(toggleComplitedTodo(id))
     }
  }

  const deleteTodoHandler = (id) => {
    apiTodo ? dispatch(removeTodoApi(id)) : dispatch(removeTodo(id));
  }

  const addTodoHandler = () => {
    const todo = {
      id: v4(),
      title: value.title,
      complited: false,
    }
    dispatch(addTodo(todo))
  }

  return(
    <li className="todo-item">
      <div className="todo-item__container">
        <p onClick={() => toggleTodoHandler(value.id)} className={value.complited ? "todo-item__text_active" : "todo-item__text"}>{value.title}</p>
        <button onClick={() => deleteTodoHandler(value.id)} className="todo-item__delite"></button>
      </div>
    </li>
  )
}

export default TodoItem;
