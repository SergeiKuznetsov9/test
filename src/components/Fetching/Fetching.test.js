import { fireEvent, render, screen } from "@testing-library/react";
import { Fetching } from "./Fetching";
import axios from "axios";

jest.mock("axios");

describe("Fetching", () => {
  let response;

  beforeEach(() => {
    response = {
      data: [
        {
          id: 1,
          name: "Earlene Schamberger",
          //   company: "Charlotte",
          //   username: "Valentin70",
          //   email: "Alvera_Mertz@hotmail.com",
          //   address: "0069 Darion Inlet",
          //   zip: "27817",
          //   state: "Wyoming",
          //   country: "Madagascar",
          //   phone: "612-501-8210 x140",
          //   photo: "https://json-server.dev/ai-profiles/13.png",
        },
        {
          id: 2,
          name: "Cali McCullough",
          //   company: "Tatyana",
          //   username: "Arne_Botsford",
          //   email: "Elian44@yahoo.com",
          //   address: "66178 Abshire Lane",
          //   zip: "31950",
          //   state: "Delaware",
          //   country: "British Indian Ocean Territory (Chagos Archipelago)",
          //   phone: "(497) 320-6587 x12267",
          //   photo: "https://json-server.dev/ai-profiles/82.png",
        },
        {
          id: 3,
          name: "Alfonzo Leffler",
          //   company: "Ali",
          //   username: "Jamel_Emmerich",
          //   email: "Marjorie.Dibbert21@yahoo.com",
          //   address: "6624 Cruickshank Motorway",
          //   zip: "88944-1039",
          //   state: "Vermont",
          //   country: "Ghana",
          //   phone: "623.592.0785",
          //   photo: "https://json-server.dev/ai-profiles/3.png",
        },
        {
          id: 4,
          name: "Archibald Botsford",
          //   company: "Mose",
          //   username: "Emanuel_Sporer",
          //   email: "Merlin57@yahoo.com",
          //   address: "3010 Schuster Squares",
          //   zip: "73527",
          //   state: "Missouri",
          //   country: "Guatemala",
          //   phone: "1-287-459-1711 x75990",
          //   photo: "https://json-server.dev/ai-profiles/57.png",
        },
        {
          id: 5,
          name: "Kitty Balistreri",
          //   company: "Spencer",
          //   username: "Gerardo_Baumbach85",
          //   email: "Mack19@hotmail.com",
          //   address: "854 Aiyana Camp",
          //   zip: "50636-2239",
          //   state: "Washington",
          //   country: "Saudi Arabia",
          //   phone: "1-487-879-5041 x9850",
          //   photo: "https://json-server.dev/ai-profiles/33.png",
        },
        {
          id: 6,
          name: "Zita Ebert",
          //   company: "Enrique",
          //   username: "Elyssa74",
          //   email: "Marcelo.Bergnaum@yahoo.com",
          //   address: "765 Murray Shoal",
          //   zip: "22477",
          //   state: "Montana",
          //   country: "Guernsey",
          //   phone: "1-958-789-2106 x205",
          //   photo: "https://json-server.dev/ai-profiles/36.png",
        },
        {
          id: 7,
          name: "Rosanna Hermiston",
          //   company: "Weldon",
          //   username: "Winifred74",
          //   email: "Brando_Hauck@gmail.com",
          //   address: "63194 Connelly Street",
          //   zip: "58766",
          //   state: "Indiana",
          //   country: "Solomon Islands",
          //   phone: "(630) 439-4368 x872",
          //   photo: "https://json-server.dev/ai-profiles/88.png",
        },
        {
          id: 8,
          name: "Alexandra Boehm",
          //   company: "Merle",
          //   username: "Silas_Smith23",
          //   email: "Roxane_Rippin89@gmail.com",
          //   address: "5933 Gillian Loop",
          //   zip: "02816",
          //   state: "Rhode Island",
          //   country: "France",
          //   phone: "1-279-319-2305 x96048",
          //   photo: "https://json-server.dev/ai-profiles/57.png",
        },
        {
          id: 9,
          name: "Gerhard Lakin",
          //   company: "June",
          //   username: "Lawson.Thompson76",
          //   email: "Aniyah.Nolan47@gmail.com",
          //   address: "67579 Jenkins Knolls",
          //   zip: "76937-8923",
          //   state: "Louisiana",
          //   country: "Mauritania",
          //   phone: "514.361.3924 x7228",
          //   photo: "https://json-server.dev/ai-profiles/15.png",
        },
        {
          id: 10,
          name: "Asha Koelpin",
          //   company: "Forrest",
          //   username: "Isac89",
          //   email: "Violet57@gmail.com",
          //   address: "02200 Aleen Trail",
          //   zip: "29339",
          //   state: "Virginia",
          //   country: "Isle of Man",
          //   phone: "501.732.7009 x826",
          //   photo: "https://json-server.dev/ai-profiles/72.png",
        },
      ],
    };
  });

  test("Событие клика", async () => {
    axios.get.mockReturnValue(response);
    render(<Fetching />);
    expect(axios.get).toHaveBeenCalledTimes(1);
    const users = await screen.findAllByTestId("user-item");
    expect(users.length).toBe(10);
  });
});
