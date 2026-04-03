import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../store/counterSlice";

function Redux() {

  // 1️⃣ Read data from global state
  const count = useSelector((state: any) => state.counter.value );

  // 2️⃣ Get dispatch function (used to send actions)
  const dispatch = useDispatch();

  return (
    <div>
      <h2>{count}</h2>

      {/* 3️⃣ When button clicked → dispatch action */}
      <button onClick={() => dispatch(increment())}>
        +
      </button>

      <button onClick={() => dispatch(decrement())}>
        -
      </button>
    </div>
  );
}

export default Redux;