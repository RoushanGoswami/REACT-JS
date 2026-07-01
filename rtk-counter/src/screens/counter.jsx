import React from "react";
import { useDispatch, useSelector } from "react-redux"; // to access the store
import { increment, decrement } from "../redux/slices/counter_slice.js"; // to access the methods or logics

export default function Counter() {
  const dispatch = useDispatch(); // like useNavigate just created a dispatch variable
  const { count } = useSelector((state) => state.counter);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>++</button>
      <button onClick={() => dispatch(decrement())}>--</button>
    </div>
  );
}
