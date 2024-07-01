const { mapArrayToString } = require("./mapArrayToString");

// Здесь рассказываем про разницу между toEqual и toBe

describe("mapArrayToString", () => {
  test("Корректное значения", () => {
    // toEqual - производит глубокое сравнение
    // toBe - приведет к падению теста, поскольку сравнение осуществляется либо по ссылке либо по значению литерала
    expect(mapArrayToString([1, 2, 3])).toEqual(["1", "2", "3"]);
  });

  test("Смесь", () => {
    expect(mapArrayToString([1, 2, null, 3, "5", undefined])).toEqual([
      "1",
      "2",
      "3",
    ]);
  });

  test("Пустой массив", () => {
    expect(mapArrayToString([])).toEqual([]);
  });

  test("Отрицание", () => {
    expect(mapArrayToString([1, 2, 3])).not.toEqual([1, 2, 3, 4]);
  });
});

