const { validateBlock } = require("./utils");

{
  // const validateFnMock = jest.fn();
  // const validateFnMock = jest.fn(() => "Результат валдиации");
}

describe("validateBlock", () => {
  it("Должен быт вызван колбэк", () => {
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
