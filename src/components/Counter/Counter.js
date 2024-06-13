import classNames from "classnames";
import cls from "./Counter.module.css";
import { useCounter } from "../../hooks/useCounter";

export const Counter = () => {
  const [count, customValue, onInput, onIncrement, onDecrement, onSetValue] =
    useCounter(0);

  return (
    <>
      <h1 className={cls.mrgBottom}>Counter</h1>
      <h2 className={cls.mrgBottom}>
        Value: <span className={cls.value}>{count}</span>
      </h2>
      <div className={cls.buttonsBlock}>
        <button
          className={classNames(cls.button, cls.incButton)}
          onClick={onIncrement}
        >
          Increment
        </button>
        <button
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
