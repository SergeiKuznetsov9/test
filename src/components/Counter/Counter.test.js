import { fireEvent, render } from "@testing-library/react";
import { Counter } from "./Counter";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { store } from "../../redux/store";

// Этот тест упадет без обертки, поскольку без нее редакс не работает, а в компоненте
// редакс используется. Поэтому добавим обертку и все заработает
test("render component", () => {
  // функция render возвращает объект с полезными методами, при помощи которых можно
  // получить доступ к искомым элементам. Причем при использовании таких методов,
  // поиск будет осуществляться не на всей странице, а непосредственно в возвращенном
  // контейнере

  const { getByTestId } = render(
    <Provider store={store}>
      <Counter />
    </Provider>
  );
  const incrementBtn = getByTestId("increment-btn");
  expect(getByTestId("value")).toHaveTextContent("0");
  fireEvent.click(incrementBtn);
  expect(getByTestId("value")).toHaveTextContent("1");
});
