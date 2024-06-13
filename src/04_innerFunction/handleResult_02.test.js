const { handleResult } = require("./handleResult");
const { doubleIncreas } = require("./utils");

jest.mock("./utils");

describe("", () => {
  it("должен вернуть массив с числами, отфильтровав все остальные значения", () => {
    doubleIncreas.mockReturnValue("Привет от filteredArr");
    const arr = [5, "6", undefined, 8, null, 0, false, {}, [], () => {}];
    const res = handleResult(arr);
    expect(res).toBe("Привет от filteredArr");
    expect(doubleIncreas).toHaveBeenCalledTimes(1);
    console.log(res);
  });

  it("что же такое мок и почему происходит 2 вызова вместо одного ожидаемого", () => {
    // jest.resetAllMocks();
    // jest.clearAllMocks();
    // doubleIncreas.mockClear()
    // doubleIncreas.mockReset()

    const arr = [5, "6", null, 0, false, {}, [], () => {}];
    handleResult(arr);
    console.log(doubleIncreas);
    console.log(doubleIncreas.mock);
    console.log(doubleIncreas.mock.calls);

    expect(doubleIncreas).toHaveBeenCalledTimes(1);
  });
});
