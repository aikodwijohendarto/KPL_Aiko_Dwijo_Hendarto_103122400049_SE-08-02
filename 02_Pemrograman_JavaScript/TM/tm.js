function fizzBuzz(arr) {
    if (!Array.isArray(arr)) {
        return "Input tidak valid";
    }

    let hasil = [];
    let i = 0;

    while (i < arr.length) {
        let angka = arr[i];

        if (angka % 14 === 0) {
            hasil.push("FizzBuzz");
        } else if (angka % 2 === 0) {
            hasil.push("Fizz"); 
        } else if (angka % 7 === 0) {
            hasil.push("Buzz");
        } else {
            hasil.push(angka);
        }
        i++;
    }

    if (arr.includes(1)) {
        return hasil.join(", ");
    } else {
        return hasil.join(" ");
    }
}

module.exports = fizzBuzz;