import { Route, Routes, useNavigate } from "react-router-dom";

import Header from "../header/Header";
import TodoList from "../todo-list/TodoList";
import TodoListApi from "../todo-list-api/TodoListApi";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/todo" element={
          <TodoList/>
        }/>
        <Route path="/todo-api" element={
          <TodoListApi/>
        }/>
      </Routes>
    </div>
  );
}

export default App;
