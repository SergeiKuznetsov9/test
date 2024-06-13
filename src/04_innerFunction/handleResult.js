const { doubleIncreas } = require("./utils");

module.exports.handleResult = (arr) => {
  const filteredArr = arr.filter((el) => typeof el === "number");

  if (typeof filteredArr === "object") {
    return doubleIncreas(filteredArr);
  }

  return filteredArr;
};
