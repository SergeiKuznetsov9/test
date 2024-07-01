const { handleResult } = require("./handleResult");
const { doubleIncreas } = require("./utils");

// Здесь рассказываем про способ решения, но более подробно эти методы описываем в следующем шаге

jest.mock("./utils");

describe("", () => {
  beforeEach(() => {
    // jest.resetAllMocks();
    // jest.clearAllMocks();
    // doubleIncreas.mockClear()
    // doubleIncreas.mockReset()
  });

  it("должен вернуть массив с числами, отфильтровав все остальные значения", () => {
    doubleIncreas.mockReturnValue("Привет от filteredArr");
    const arr = [5, "6", undefined, 8, null, 0, false, {}, [], () => {}];
    const res = handleResult(arr);
    expect(res).toBe("Привет от filteredArr");
    expect(doubleIncreas).toHaveBeenCalledTimes(1);
    console.log(res);
    console.log(doubleIncreas.mock); // здесь счетчики
  });

  it("что же такое мок и почему происходит 2 вызова вместо одного ожидаемого", () => {
    const arr = [5, "6", null, 0, false, {}, [], () => {}];
    handleResult(arr);
    expect(doubleIncreas).toHaveBeenCalledTimes(1);
  });
});
