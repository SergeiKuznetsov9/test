import { getCountValue } from "../redux/selectors/counterSelectors";
import { useCallback, useEffect, useState } from "react";
import { increment, decrement, setValue } from "../redux/slices/counterSlice";
import { useAppDispatch, useAppSelector } from "./reduxHooks";

export const useCounter = (initialValue) => {
  const [customValue, setCustomValue] = useState(0);
  const count = useAppSelector(getCountValue);
  const dispatch = useAppDispatch();

  const onIncrement = useCallback(() => {
    dispatch(increment());
  }, [dispatch]);

  const onDecrement = useCallback(() => {
    dispatch(decrement());
  }, [dispatch]);

  const onSetValue = useCallback(() => {
    dispatch(setValue(Number(customValue)));
  }, [dispatch, customValue]);

  const onInput = useCallback((ev) => {
    let result = ev.target.value.replace(/^0+/, "");
    setCustomValue(result === "" ? "0" : result);
  }, []);

  useEffect(
    () => {
      dispatch(setValue(initialValue));
    },
    /* [] */ [initialValue]
  );

  return [count, customValue, onInput, onIncrement, onDecrement, onSetValue];
};
