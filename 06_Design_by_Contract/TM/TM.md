# Tugas Mandiri 6

## Penjelasan

Fungsi `is_not_fizzbuzz` dibuat untuk menyaring bilangan agar tidak termasuk kategori "fizz buzz". Maksudnya, fungsi ini akan mengembalikan `false` jika angka tersebut merupakan kelipatan 3, 5, atau keduanya (15). Sebaliknya, fungsi akan mengembalikan `true` jika angka tersebut bukan kelipatan dari angka-angka tersebut.

Selain itu, fungsi ini juga menerapkan konsep defensive programming, yaitu dengan melakukan validasi terhadap input. Jika input bukan bilangan bulat yang valid, seperti `null`, `NaN`, atau `Infinity`, maka fungsi akan langsung melempar `TypeError`. Hal ini dilakukan untuk mencegah kesalahan lebih lanjut saat proses perhitungan.

Validasi dilakukan dengan tiga pengecekan:
- `typeof number === 'number'` untuk memastikan tipe data adalah number
- `Number.isFinite(number)` untuk memastikan bukan `Infinity` atau `NaN`
- `Number.isInteger(number)` untuk memastikan bilangan bulat

Setelah lolos validasi, fungsi akan mengecek apakah angka habis dibagi 3 atau 5 menggunakan operator modulo (`%`). Jika iya, maka langsung mengembalikan `false`. Jika tidak, maka mengembalikan `true`.

Pendekatan ini memastikan bahwa fungsi tidak hanya benar secara logika, tetapi juga aman terhadap input yang tidak valid.

## Implementasi

```js
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