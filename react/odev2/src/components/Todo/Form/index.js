import { useState } from "react";

function Form({ todoList, setTodoList }) {
  const [newTodo, setNewTodo] = useState("");

  const handleOnChange = (e) => setNewTodo(e.target.value);
  const submitHandler = (e) => e.preventDefault();
  const handleOnEnter = (e) => {
    if (newTodo === "") {
      return false;
    }

    if (e.key === "Enter") {
      setTodoList([...todoList, { name: newTodo, status: "active" }]);
      setNewTodo("");
    }
  };

  return (
    <div>
      <header className="header">
        <h1>todos</h1>
        <form onSubmit={submitHandler}>
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            autoFocus
            value={newTodo}
            onChange={handleOnChange}
            onKeyPress={handleOnEnter}
          />
        </form>
      </header>
    </div>
  );
}

export default Form;
