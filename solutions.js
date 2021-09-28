// Project Euler - Problem #2:
const getFibSum = () => {
  let result = 0;
  let previous = 0;
  let current = 1;

  for (let i = 0; ; i++) {
    let next = previous + current;
    if (next > 4000000) {
      break;
    }
    if (next % 2 === 0) {
      result += next;
    }
    previous = current;
    current = next;
  }
  console.log("Problem 2", result);
};
getFibSum();
