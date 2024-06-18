import { renderHook } from "@testing-library/react";
import { useCounter } from "./useCounter";
import * as ReduxHooksModule from "./reduxHooks";

jest.mock("./reduxHooks");
const mockAppDispatch = ReduxHooksModule.useAppDispatch;
mockAppDispatch.mockReturnValue(() => {});

describe("useCounter", () => {
  it("Тест 2", () => {
    renderHook(() => useCounter(5));
  });
});
