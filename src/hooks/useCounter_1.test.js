import { renderHook } from "@testing-library/react";
import { useCounter } from "./useCounter";
import { Provider } from "react-redux";
import { store } from "../redux/store";

const HookTestingWrapper = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);

describe("useCounter", () => {
  it("Тест 1", () => {
    renderHook(() => useCounter(5), {
      wrapper: HookTestingWrapper,
    });
  });
});
