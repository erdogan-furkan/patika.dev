import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectFilteredTodos,
  getTodoAsync,
  toggleTodoAsync,
  removeTodoAsync,
} from "../../redux/todos/todosSlice";
import Loading from "../Loading";
import Error from "../Error";

function TodoList() {
  const dispatch = useDispatch();

  const filtered = useSelector(selectFilteredTodos);

  const isLoading = useSelector((state) => state.todos.isLoading);
  const error = useSelector((state) => state.todos.error);

  useEffect(() => {
    dispatch(getTodoAsync());
  }, [dispatch]);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error message={error} />;
  }

  return (
    <ul className="todo-list">
      {filtered.map((item) => (
        <li key={item._id} className={item.completed ? "completed" : null}>
          <div className="view">
            <input
              className="toggle"
              type="checkbox"
              checked={item.completed}
              onChange={() =>
                dispatch(
                  toggleTodoAsync({
                    _id: item._id,
                    data: { completed: !item.completed },
                  })
                )
              }
            />
            <label>{item.title}</label>
            <button
              className="destroy"
              onClick={() => dispatch(removeTodoAsync({ _id: item._id }))}
            ></button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
