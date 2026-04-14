# Tugas Pendahuluan 05 - Generics

## Deskripsi
Program ini dibuat untuk menghitung:
1. Jumlah seluruh karakter dalam sebuah string
2. Jumlah huruf (tanpa spasi)

Perhitungan dilakukan menggunakan satu fungsi bernama `hitung`.

## Pendekatan
Alih-alih membuat dua fungsi terpisah, digunakan satu fungsi dengan parameter `tipe` untuk mengatur perilaku:
- `"semua"` → menghitung semua karakter
- `"huruf"` → menghitung karakter selain spasi

Pendekatan ini menghindari duplikasi kode dan membuat fungsi lebih fleksibel.

## Implementasi

### Kode
```javascript
function hitung(str, tipe) {
  let count = 0;

  for (const c of str) {
    if (tipe === "huruf" && c === " ") continue;
    count++;
  }

  return count;
}

module.exports = hitung;

const hitung = require("./index");

const str = "Bar bar bar";

console.log(hitung(str, "semua")); // 11
console.log(hitung(str, "huruf")); // 9