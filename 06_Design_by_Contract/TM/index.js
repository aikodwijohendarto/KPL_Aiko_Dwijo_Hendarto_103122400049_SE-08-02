function is_not_fizzbuzz(number) {
    if (typeof number !== 'number' || !Number.isFinite(number) || !Number.isInteger(number)) {
        throw new TypeError('Input harus bilangan bulat yang valid');
    }

    if (number % 3 === 0 || number % 5 === 0) {
        return false;
    }

    return true;
}

console.log(is_not_fizzbuzz(1))   // true
console.log(is_not_fizzbuzz(3))   // false
console.log(is_not_fizzbuzz(5))   // false
console.log(is_not_fizzbuzz(30))  // false
console.log(is_not_fizzbuzz(7))   // true

console.log(is_not_fizzbuzz(null))      // TypeError
console.log(is_not_fizzbuzz(NaN))       // TypeError
console.log(is_not_fizzbuzz(Infinity))  // TypeError