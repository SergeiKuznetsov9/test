const { square, filtering } = require("./utils_01");

// Такие моки работать не будут, поскольку Mock решает задачу подмены целых модулей
// jest.mock("Math");
// Math.pow.mockReturnValue("Привет от MathPow");

// const mockFilter = jest.mock(Array.filter)
// mockFilter.mockReturnValue('Привет от mockFilter')

// Если нам необходимо подменить функцию из глобального объекта, или даже отдельную функцию
// из импортированного модуля (причем в рантайме), то с этой задачей лучше справится spyOn

describe("square", () => {
  // test("Мок встроенного метода", () => {
  //   const res = square(50);
  //   console.log(res);
  // });

  // test("Мок встроенного метода", () => {
  //   const res = filtering(['f', false, 54, true, undefined]);
  //   console.log(res);
  // });

  it("Мок встроенного метода", () => {
    jest.spyOn(Math, "pow").mockReturnValue("Привет от MathPow");
    const res = square(50);
    expect(Math.pow).toHaveBeenCalledTimes(1);
    console.log("Результат первого теста", res);
    // jest.clearAllMocks()
    // jest.resetAllMocks()
    jest.restoreAllMocks();
  });

  it("Мок встроенного метода", () => {
    const res = square(50);
    expect(Math.pow).toHaveBeenCalledTimes(1);
    console.log("Результат второго теста", res);

    // console.log(res)
    // jest.restoreAllMocks()
  });

  // jest.clearAllMocks(); // отчищает все счетчики использования моков, но не реализацию
  // jest.resetAllMocks(); // отчищает все счетчики использования моков, а также реализацию, подменяя ее на дефолтную
  // jest.restoreAllMocks(); // возвращает первоначальное состояние
});
