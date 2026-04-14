/**
 * @param {number} value
 * @returns {string|number}
 */
function zzzzOrNum(value) {
  if (typeof value !== "number") {
    throw new Error("Input harus number");
  }

  if (value % 15 === 0) return "FizzBuzz";
  if (value % 3 === 0) return "Fizz";
  if (value % 5 === 0) return "Buzz";
  return value;
}

/**
 * @param {number[]} sequence
 * @returns {(string|number)[]}
 */
function fizzBuzz(sequence) {
  if (!Array.isArray(sequence)) {
    throw new Error("Input harus array");
  }

  return sequence.map(e => zzzzOrNum(e));
}

module.exports = {
  fizzBuzz,
  zzzzOrNum,
};