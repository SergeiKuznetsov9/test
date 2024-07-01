const { validateBlock } = require("./utils");

// Здесь поговорим о мокировании пробрасываемой аргументом функции
// Такой мок может быть создан как за пределами describe, так и внутри него, поскольку мы создаем 
// "пустую" функцию и пробрасываем ее в качестве аргумента

{
  // мокирование функции может производиться по-разному:
  // const validateFnMock = jest.fn(() => "Результат валдиации");
  // const validateFnMock = jest.fn();
}

describe("validateBlock", () => {
  
  it("Должен быть вызван колбэк", () => {
    {
      // validateFnMock.mockImplementation(() => "Результат валдиации")
      // validateFnMock.mockReturnValue("Результат валдиации")
    }
    const res = validateBlock(5, validateFnMock);

    {
      expect(res).toBe("Результат валдиации");
    }
  });
});
