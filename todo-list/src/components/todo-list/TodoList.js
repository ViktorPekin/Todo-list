import TodoItem from "../todo-item/TodoItem"

const TodoList = () => {
  return(
    <main className="todo-list">
      <form className="todo-list__form">
        <input type="text" className="todo-list__input"></input>
        <button className="todo-list__button"></button>
      </form>
      <ul className="todo-list__container">
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
      </ul>
    </main>
  )
}

export default TodoList;
