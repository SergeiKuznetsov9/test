const getData = require("./getData");
const axios = require("axios");

// Здесь мы тестируем функцию, которая асинхронно получает данные
// для этого нам нужно будет замокать axios. С этой целью мы его импортируем и мокаем:

jest.mock("axios");

describe("getData", () => {
  let response;

  // используем beforeEach, чтобы для каждого теста замокать данные. (хотя можно было бы использовать и beforeAll)
  // для этого нужно вставить туда несколько юзеров, которых вернет бэк, с учетоммодели ответа:
  beforeEach(() => {
    response = {
      data: [
        {
          id: 1,
          name: "Leanne Graham",
          username: "Bret",
          email: "Sincere@april.biz",
          address: {
            street: "Kulas Light",
            suite: "Apt. 556",
            city: "Gwenborough",
            zipcode: "92998-3874",
            geo: {
              lat: "-37.3159",
              lng: "81.1496",
            },
          },
          phone: "1-770-736-8031 x56442",
          website: "hildegard.org",
          company: {
            name: "Romaguera-Crona",
            catchPhrase: "Multi-layered client-server neural-net",
            bs: "harness real-time e-markets",
          },
        },
        {
          id: 2,
          name: "Ervin Howell",
          username: "Antonette",
          email: "Shanna@melissa.tv",
          address: {
            street: "Victor Plains",
            suite: "Suite 879",
            city: "Wisokyburgh",
            zipcode: "90566-7771",
            geo: {
              lat: "-43.9509",
              lng: "-34.4618",
            },
          },
          phone: "010-692-6593 x09125",
          website: "anastasia.net",
          company: {
            name: "Deckow-Crist",
            catchPhrase: "Proactive didactic contingency",
            bs: "synergize scalable supply-chains",
          },
        },
        {
          id: 3,
          name: "Clementine Bauch",
          username: "Samantha",
          email: "Nathan@yesenia.net",
          address: {
            street: "Douglas Extension",
            suite: "Suite 847",
            city: "McKenziehaven",
            zipcode: "59590-4157",
            geo: {
              lat: "-68.6102",
              lng: "-47.0653",
            },
          },
          phone: "1-463-123-4447",
          website: "ramiro.info",
          company: {
            name: "Romaguera-Jacobson",
            catchPhrase: "Face to face bifurcated interface",
            bs: "e-enable strategic applications",
          },
        },
      ],
    };
  });

  // Теперь эту схему нужно согласовать с методом get у аксиоса. Для этого пишем тест:

  test('Корректное значение', async () => {
    // в данном случае jest подхватывает созданный выше мок аксиоса и возвращает его на метод get аксиоса
    axios.get.mockReturnValue(response);

    // теперь вызываем тестируемую функцию
    const data = await getData();

    // теперь описываем наши ожидания

    // во-первых мы ждем, что axios.get вызовется хотя бы один раз
    expect(axios.get).toBeCalledTimes(1);

    // также мы ожидаем, что получим массив айдишников, причем только трех, т.к. замоканы только три юзера
    expect(data).toEqual(["1", "2", "3"]);

    // После вызова expect также можно вызвать функцию toMatchSnapshot: expect(data).toMatchSnapshot()
    // Это создать текстовый файл с результатами тестовых вычислений
  });
});
