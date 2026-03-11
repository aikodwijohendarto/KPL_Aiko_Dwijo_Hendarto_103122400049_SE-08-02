/**
 * Tulislah sebuah fungsi yang menerima bilangan N dan mencetak penjumlahan dari 1 hingga N.
 * contohnya, jika N adalah 5, maka fungsi akan mencetak 15 (1 + 2 + 3 + 4 + 5).
 */

function sumNvalue(n) {
    let hasil = 0;
    for (let i = 1; i <= n; i++) {
        hasil += i;
    }
    return hasil;
}
console.log(sumNvalue(5));