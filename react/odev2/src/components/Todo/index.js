import { useState, useEffect } from "react";

import List from "./List";
import Form from "./Form";

function Contacts() {
  const [todoList, setTodoList] = useState([{ name: "", status: "" }]);

  useEffect(() => {
    localStorage.getItem("todoList") &&
      setTodoList(JSON.parse(localStorage.getItem("todoList")));
  }, []);

  useEffect(() => {
    const newTodoList = todoList.filter((todo) => todo.name && todo.status);
    localStorage.setItem("todoList", JSON.stringify(newTodoList));
  }, [todoList]);

  return (
    <div>
      <section className="todoapp">
        <Form todoList={todoList} setTodoList={setTodoList} />
        <List todoList={todoList} setTodoList={setTodoList} />
      </section>

      <footer className="info">
        <p>Click to edit a todo</p>
        <p>
          Created by <a href="https://d12n.me/">Dmitry Sharabin</a>
        </p>
        <p>
          Part of <a href="http://todomvc.com">TodoMVC</a>
        </p>
      </footer>
    </div>
  );
}

export default Contacts;
