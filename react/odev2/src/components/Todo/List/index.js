import { useState } from "react";

function List({ todoList, setTodoList }) {
  const [filter, setFilter] = useState("All");

  const filteredTodoList =
    filter === "Completed"
      ? todoList.filter((todo) => todo.status === "completed")
      : filter === "Active"
      ? todoList.filter((todo) => todo.status === "active")
      : todoList.filter((todo) => todo.name && todo.status);

  const markTodo = (e, todo) => {
    if (e.target.checked) {
      setTodoList(
        todoList.map((todoItem) =>
          todo === todoItem
            ? { name: todo.name, status: "completed" }
            : todoItem
        )
      );
    } else {
      setTodoList(
        todoList.map((todoItem) =>
          todo === todoItem ? { name: todo.name, status: "active" } : todoItem
        )
      );
    }
  };

  const changeFilter = (e) => {
    const selectedFilter = e.target;

    const filterList = document.querySelectorAll(".filters li button");

    filterList.forEach((filterItem) => {
      filterItem !== selectedFilter && filterItem.classList.remove("selected");
    });

    selectedFilter.classList.add("selected");

    setFilter(selectedFilter.innerText);
  };

  const deleteTodo = (e) => {
    const newTodoList = todoList.filter(
      (todo) => todo !== todoList[e.target.id]
    );
    setTodoList(newTodoList);
  };

  const clearCompletedTodos = () => {
    setTodoList(todoList.filter((todo) => todo.status === "active"));
  };

  const listItems = filteredTodoList.map((todo, key) => {
    return (
      <li
        className={
          todo.status === "completed" && filter === "All"
            ? "completed"
            : undefined
        }
        key={key}
      >
        <div className="view">
          <input
            className="toggle"
            checked={todo.status === "completed" ? true : false}
            type="checkbox"
            id={"todo-" + key}
            onChange={(e) => markTodo(e, todo)}
          />
          <label htmlFor={"todo-" + key}>{todo.name}</label>
          <button id={key} className="destroy" onClick={deleteTodo}></button>
        </div>
      </li>
    );
  });

  return (
    <div>
      <section className="main">
        <input className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>

        <ul className="todo-list">{listItems}</ul>
      </section>

      <footer className="footer">
        <span className="todo-count">
          <strong>{listItems.length}</strong>
          {listItems.length > 1 ? " items left" : " item left"}
        </span>

        <ul className="filters">
          <li>
            <button className="selected" onClick={changeFilter}>
              All
            </button>
          </li>
          <li>
            <button onClick={changeFilter}>Active</button>
          </li>
          <li>
            <button onClick={changeFilter}>Completed</button>
          </li>
        </ul>

        <button onClick={clearCompletedTodos} className="clear-completed">
          Clear completed
        </button>
      </footer>
    </div>
  );
}

export default List;
