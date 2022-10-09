import TodoItem from "../todo-item/TodoItem";

const TodoListApi = () => {
  return(
    <main className="todo-list-api">
      <button className="todo-list-api__button">Request a list</button>
      <ul className="todo-list__container">
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
      </ul>
    </main>
  )
}

export default TodoListApi;
