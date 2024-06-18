import { render, screen } from "@testing-library/react";
import { Greeting } from "./Greeting";

describe("Greeting", () => {
  it("Рендер компонента component", () => {
    // Рендерим компонент, который хотим протестировать
    render(<Greeting />);

    // Получим при помощи регулярки, игнорируя регистр
    const header = screen.getByText(/hello world/i);
    const descElem = screen.getByTestId("description-elem");
    const btn = screen.getByRole("button");
    const input = screen.getByPlaceholderText(/input value/i);
    expect(header).toBeInTheDocument();
    expect(descElem).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });

  // Получать доступ к сущностям для тестирования можно разными методами:
  //  findBy    getBy     queryBy
  //  findAll   getAll    queryAll

  // ОТЛИЧИЯ
  // get - обязательно должен что-то найти. Если найти не может, то тест
  // падает с ошибкой

  // query - позволяет убедиться в том, что какая то сущность отсутсвует
  // в документе. Возвращает null, если сущность найти не удалось, ошибка
  // не генерируется

  // find - возвращает объект завернутый в промис

  it("Отсутствие элемента", () => {
    const elem = screen.queryByText(/any text/i);
    // const elem = screen.getByText(/any text/i);
    expect(elem).toBeNull();
  });
});
