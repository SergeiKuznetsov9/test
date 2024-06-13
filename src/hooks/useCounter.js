import { useDispatch, useSelector } from "react-redux";
import { getCountValue } from "../redux/selectors/counterSelectors";
import { useCallback, useState } from "react";
import { increment, decrement, setValue } from "../redux/slices/counterSlice";

export const useCounter = (initialValue) => {
  const [customValue, setCustomValue] = useState(initialValue);
  const count = useSelector(getCountValue);
  const dispatch = useDispatch();

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

  return [count, customValue, onInput, onIncrement, onDecrement, onSetValue];
};
