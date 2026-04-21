function toNumberArray(input) {
  let arr;

  if (Array.isArray(input)) {
    arr = input;
  } else if (typeof input === "string") {
    const matches = input.match(/-?\d+(\.\d+)?/g);
    arr = matches ? matches : [];
  } else {
    return [];
  }

  return arr
    .map(x => Number(x))
    .filter(x => !Number.isNaN(x));
}

// test
console.log(toNumberArray("1, 2")); // [1, 2]
console.log(toNumberArray(["1", "2"])); // [1, 2]
console.log(toNumberArray(" 11,55,33 ")); // [11, 55, 33]
console.log(toNumberArray(["0.2", "-11", "abc23"])); // [0.2, -11]