import classNames from "classnames";
import cls from "./Counter.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  setValue,
} from "../../redux/slices/counterSlice";
import { useState } from "react";
import { getCountValue } from "../../redux/selectors/counterSelectors";

export const Counter = () => {
  const [customValue, setCustomValue] = useState(0);
  const count = useSelector(getCountValue);
  const dispatch = useDispatch();

  const onIncrement = () => {
    dispatch(increment());
  };

  const onDecrement = () => {
    dispatch(decrement());
  };

  const onSetValue = () => {
    dispatch(setValue(Number(customValue)));
  };

  const onInput = (ev) => {
    let result = ev.target.value.replace(/^0+/, "");
    setCustomValue(result === "" ? "0" : result);
  };

  return (
    <>
      <h1 className={cls.mrgBottom}>Counter</h1>
      <h2 className={cls.mrgBottom}>
        Value: <span className={cls.value} data-testId="value">{count}</span>
      </h2>
      <div className={cls.buttonsBlock}>
        <button
          data-testId="increment-btn"
          className={classNames(cls.button, cls.incButton)}
          onClick={onIncrement}
        >
          Increment
        </button>
        <button
          data-testId="decrement-btn"
          className={classNames(cls.button, cls.decButton)}
          onClick={onDecrement}
        >
          Decrement
        </button>
      </div>
      <div className={cls.setValueBlock}>
        <input
          type="number"
          className={cls.input}
          value={customValue}
          onInput={onInput}
        />
        <button
          className={classNames(cls.button, cls.setButton)}
          onClick={onSetValue}
        >
          Set Value
        </button>
      </div>
    </>
  );
};
