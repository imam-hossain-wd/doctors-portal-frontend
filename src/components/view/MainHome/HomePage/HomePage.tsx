
'use client'

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { decrement, increment, incrementByAmount } from "@/redux/slice/counterSlice";

const HomePage = () => {
    const count = useAppSelector((state) => state.counter.value);

  const dispatch= useAppDispatch();

  return (
    <div>
      <h1>Doctors Portal home page....</h1>
      <h1>Count Doctor: {count}</h1>

      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(2))}>Increment by 2</button>
    </div>
  );
};

export default HomePage;
