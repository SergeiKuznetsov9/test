module.exports.mapArrayToString = (arr) =>
  arr.filter((el) => typeof el === "number").map(String);
