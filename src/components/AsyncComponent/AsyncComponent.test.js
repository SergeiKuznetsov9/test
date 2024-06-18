import { render, screen } from "@testing-library/react";
import { AsyncComponent } from "./AsyncComponent";

describe("AsyncComponent", () => {
  test("Тест асинхронной сущности", async () => {
    render(<AsyncComponent />);
    // Если задержка долгая, то используем таймаут
    const dataElem = await screen.findByText(/data/i, {}, { timeout: 2000 });
    expect(dataElem).toBeInTheDocument();
  });
});
