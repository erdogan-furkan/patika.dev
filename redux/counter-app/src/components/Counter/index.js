import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
} from "../../redux/counter/counterSlice";

function Counter() {
  const [amount, setAmount] = useState(0);

  const countValue = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Redux Counter App</h1>

      <h2>{countValue}</h2>

      <button onClick={() => dispatch(decrement())} style={{ marginRight: 5 }}>
        Decrement
      </button>
      <button onClick={() => dispatch(increment())}>Increment</button>

      <br />
      <br />

      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(parseFloat(e.target.value))}
      />

      <br />
      <br />

      <button onClick={() => dispatch(incrementByAmount(amount))}>
        Increment by amount
      </button>
    </div>
  );
}

export default Counter;
