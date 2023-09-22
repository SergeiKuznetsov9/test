const delay = require("./delay");

// для тестирования асинхронных функций, необходимо указать, что коллбэк асинхронный:
describe("delay", () => {
  test("Асинхронная функция", async () => {
    const sum = await delay(() => 2 + 9, 1000);
    expect(sum).toBe(11);
  });
});
