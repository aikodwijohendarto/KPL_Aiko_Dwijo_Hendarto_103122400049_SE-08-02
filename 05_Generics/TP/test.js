const hitung = require("./index");

const str = "Bar bar bar";

console.log(hitung(str, "semua")); // 11
console.log(hitung(str, "huruf")); // 9

hitung(str, "huruf");