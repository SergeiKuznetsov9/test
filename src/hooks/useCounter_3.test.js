import { renderHook } from "@testing-library/react";
import { useCounter } from "./useCounter";
import { Provider } from "react-redux";
import { store } from "../redux/store";

const HookTestingWrapper = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);

describe("useCounter", () => {
  it("Count должно принять начальное значение", () => {
    const { result, rerender } = renderHook(
      ({ initialValue }) => useCounter(initialValue),
      {
        initialProps: {
          initialValue: 2,
        },
        wrapper: HookTestingWrapper,
      }
    );

    console.log(result);
    expect(result.current[0]).toBe(2);

    rerender({ initialValue: 5 });
    expect(result.current[0]).toBe(5);
  });
});
