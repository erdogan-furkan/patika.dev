import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodoAsync } from "../../redux/todos/todosSlice";
import Loading from "../Loading";
import Error from "../Error";

function Form() {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const addTodoLoading = useSelector((state) => state.todos.addTodoLoading);
  const addTodoError = useSelector((state) => state.todos.addTodoError);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title) return;

    dispatch(addTodoAsync({ title }));

    setTitle("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", alignItems: "center" }}
    >
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        disabled={addTodoLoading}
      />

      {addTodoLoading && <Loading />}
      {addTodoError && <Error message={addTodoError} />}
    </form>
  );
}

export default Form;
