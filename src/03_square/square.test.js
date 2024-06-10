const { square } = require("./square");

describe("square", () => {
  // В jest при использовании describe имеется возможность перед запуском каждого теста
  // проводить какие то операции. Для этого используется ф-ция beforeEach.

  // Например можно всякий раз генерировать рандомное значения, а потом пробрасывать его
  // в тест:

  // let mockValue;
  //   beforeEach( () => {
  //     mockValue = Math.random()
  //   })

  // Перед каждым тестом
  // beforeAll( () => { })

  // После каждого теста
  // afterEach( () => { })

  // После всех тестов
  // afterAll( () => { })

  test("Корректное значение", () => {
    // Приведены примеры использования других методов:
    expect(square(50)).toBe(2500);

    // Сравнение
    expect(square(50)).toBeLessThan(2501);
    expect(square(50)).toBeGreaterThan(2499);
    expect(square(50)).not.toBeUndefined();

    // К примеру, в тестируемой функции имеется вызов другой функции или метода.
    // Результат вызова этого метода, количество его вызовов можно также протестировать.

    // Для этого у jest существует ряд инструментов. К примеру, обеспечим наблюдение за
    // вызовом метода pow внутри объекта Math:
    const spyMathPow = jest.spyOn(Math, "pow");

    // дальше вызываем тестируемую функцию и передаем этот метод в expect, ожидая, что этот метод
    // будет вызван определенное кол-во раз. В данном случае он должен будет быть вызван 1 раз
    const result = square(2);
    expect(result).toBe(4);
    expect(spyMathPow).toHaveBeenCalledTimes(1);
    expect(spyMathPow).toHaveBeenCalled();
    expect(spyMathPow).toHaveBeenCalledWith(2, 2);
  });

  test("Корректное значение", () => {
    // Теперь опишем случай, когда этот метод не должен быть вызван вообще:
    const spyMathPow = jest.spyOn(Math, "pow");
    square(1);
    expect(spyMathPow).toBeCalledTimes(0);

    // Однако этот тест ляжет, если не закомментировать предыдуший тест. Это происходит по той причине, что моки
    // самостоятельно не удаляются. Их нужно удалять после каждого теста и для этого можно использовать afterEach(() => {});
    // С ним два данных теста будут отрабатыва корректно.
  });

  // Аналогично, после тестов тоже можем выполнить нейкий код. Для того существуют следующие функции:
  // Например в beforeEach мы добавили некоего пользователя в БД, а потом в afterEach мы его удалили

  afterEach(() => {
    jest.clearAllMocks(); // отчищает все счетчики, но не реализацию
    jest.resetAllMocks();
  });
});
// https://dev.to/edwinwong90/jestclearallmocks-vs-jestresetallmocks-vs-jestrestoreallmocks-explained-5aal