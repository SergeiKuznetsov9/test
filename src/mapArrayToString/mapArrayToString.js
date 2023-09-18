const mapArrayToString = (arr) => {
  return arr.filter((el) => typeof el === "number").map(String);
};

module.exports = mapArrayToString;
