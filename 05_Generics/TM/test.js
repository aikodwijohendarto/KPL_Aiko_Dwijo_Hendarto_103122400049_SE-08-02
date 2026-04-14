const fb = require("./index");
const assert = require("node:assert");

try {
  assert.deepStrictEqual(
    fb.fizzBuzz([1, 2, 3, 4, 5]),
    [1, 2, "Fizz", 4, "Buzz"]
  );

  assert.deepStrictEqual(
    fb.fizzBuzz([15, 30]),
    ["FizzBuzz", "FizzBuzz"]
  );

  assert.deepStrictEqual(fb.fizzBuzz([]), []);

  assert.throws(() => fb.fizzBuzz(123));

  assert.strictEqual(fb.zzzzOrNum(3), "Fizz");
  assert.strictEqual(fb.zzzzOrNum(5), "Buzz");
  assert.strictEqual(fb.zzzzOrNum(7), 7);

  assert.throws(() => fb.zzzzOrNum("a"));

  console.log("Semua test lolos");
} catch (err) {
  console.error("Gagal:", err.message);
}