import { fireEvent, render, screen } from "@testing-library/react";
import { Events } from "./Events";

describe("AsyncComponent", () => {
  test("Событие клика", () => {
    render(<Events />);
    const btn = screen.getByTestId("toggle-btn");

    // используем query, т.к. у нас нету этого элемента в ДОМ
    let toggleDiv = screen.queryByTestId("toggle-elem");
    expect(toggleDiv).toBeNull();

    // При помощи объекта fireEvent можем имитировать события
    fireEvent.click(btn);
    // Нужно опять получить элемент, т.к. toggleDiv всегда будет null если этого не сделать
    toggleDiv = screen.queryByTestId("toggle-elem");
    expect(toggleDiv).toBeInTheDocument();

    fireEvent.click(btn);
    toggleDiv = screen.queryByTestId("toggle-elem");
    expect(toggleDiv).toBeNull();
  });
});
