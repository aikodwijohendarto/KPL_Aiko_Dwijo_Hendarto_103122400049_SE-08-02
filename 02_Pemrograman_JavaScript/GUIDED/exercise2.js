/**
 * Buatlah sebuah array berisi 3 minuman favorit kalian dan simpan dalam variabel
 * bernama listMinuman. setelah itu, ubah 2 element pertama menggunakan notasi kurung dan penugasan
 * terakhir, tambahkan minuman baru di bagian depan array.
 */

const listMinuman = ["Juk Jerus", "Torpedo", "Ale ale"];

listMinuman[0] = "Es Teler";
listMinuman[1] = "Susu";
listMinuman.unshift ("Kopi");
console.log(listMinuman); 