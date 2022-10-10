import TodoItem from "../todo-item/TodoItem";
import { useDispatch, useSelector } from 'react-redux';
import { getTodo } from "../../features/todoListApi/todoListApiSlice";
import { v4 } from 'uuid'

const TodoListApi = () => {
  const todosApi = useSelector((state) => state.todoListApi.todosApi);
  const dispatch = useDispatch();
  return(
    <main className="todo-list-api">
      <button onClick={() => dispatch(getTodo())} className="todo-list-api__button">Request a list</button>
      <ul className="todo-list__container">
        {todosApi.slice(0,10)?.map((todo) => (
          <TodoItem apiTodo={true} value={todo} key={v4()}/>
        ))}
      </ul>
    </main>
  )
}

export default TodoListApi;
