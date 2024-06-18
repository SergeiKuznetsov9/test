import counterReducer, { increment, decrement, setValue } from "./counterSlice";

describe("counterReducer", () => {
  it("increment", () => {
    const initState = { value: 0 };
    expect(counterReducer(initState, increment())).toEqual({ value: 1 });
  });

  it("decrement", () => {
    const initState = { value: 5 };

    expect(counterReducer(initState, decrement())).toEqual({ value: 4 });
  });

  it("setValue", () => {
    const initState = { value: 5 };
    expect(counterReducer(initState, setValue(10))).toEqual({ value: 10 });
    expect(counterReducer(initState, setValue(10))).not.toBe(initState);
  });

  it("setValue not the same object", () => {
    const initState = { value: 5 };
    // expect(counterReducer(initState, setValue(5))).toBe(initState);
    expect(counterReducer(initState, setValue(5))).toEqual(initState);
  });
});
