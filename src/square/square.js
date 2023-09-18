const square = (num) => {
  if (num === 1) return 1;
  console.log('GoForward')
  return Math.pow(num, 2);
};

module.exports = square;
