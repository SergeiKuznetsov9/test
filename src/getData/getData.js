const axios = require("axios");
const mapArrayToString = require("../mapArrayToString/mapArrayToString");

const getData = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    const userIds = response.data.map((user) => user.id);
    return mapArrayToString(userIds);
  } catch (error) {console.log(error)}
};

module.exports = getData;
