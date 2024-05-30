"use client";

import { getBaseUrl } from "@/helpers/config/envConfig";
import { useGetUserQuery } from "@/redux/api/userApi";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  decrement,
  increment,
  incrementByAmount,
} from "@/redux/slice/counterSlice";

const HomePage = () => {
  const dispatch = useAppDispatch();
  const count = useAppSelector((state) => state.counter.value);

  const { data, isLoading } = useGetUserQuery(undefined);

  if(isLoading){
    return <p>Loading.....</p>
  }

  console.log(data, "data------");

  console.log(getBaseUrl(), 'getBaseUrl()');
  return (
    <div>
      <h1>Doctors Portal home page....</h1>
      <h1>Count Doctor: {count}</h1>

      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(2))}>
        Increment by 2
      </button>
    </div>
  );
};

export default HomePage;
