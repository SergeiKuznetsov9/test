const { handleResult } = require("./handleResult");
const { doubleIncreas } = require("./utils");

// мокирвание внутри describe не допускается, т.к. к моменту начала выполенения тестового
// кода модули уже импортированы
jest.mock("./utils");

describe("", () => {
  beforeAll(() => {
    // выведет мок, если мокирование произведено за пределами describe
    console.log(doubleIncreas);
    doubleIncreas.mockReturnValue("Привет от filteredArr");
  });

  it("должен вернуть массив с числами, отфильтровав все остальные значения", () => {
    const arr = [5, "6", undefined, 8, null, 0, false, {}, [], () => {}]; // если убрать mockReturnValue, то [10, 16, 0]
    const res = handleResult(arr);
    expect(res).toBe("Привет от filteredArr");
    console.log(res);
  });
});
