# Tugas Mandiri 05 - Generics

## Deskripsi
Program ini mengimplementasikan FizzBuzz dengan pendekatan modular.  
Terdapat dua fungsi utama:
- `zzzzOrNum` untuk memproses satu nilai
- `fizzBuzz` untuk memproses sekumpulan nilai (array)

Output berupa kombinasi string dan number sesuai aturan FizzBuzz.

## Penjelasan

### 1. Fungsi zzzzOrNum
Fungsi ini bertanggung jawab terhadap logika inti:
- Jika habis dibagi 3 dan 5 → `"FizzBuzz"`
- Jika hanya habis dibagi 3 → `"Fizz"`
- Jika hanya habis dibagi 5 → `"Buzz"`
- Selain itu → kembalikan angka

Terdapat validasi:
- Jika input bukan number → error

Fungsi ini dibuat terpisah agar:
- Tidak terjadi duplikasi logika
- Bisa digunakan ulang di bagian lain

---

### 2. Fungsi fizzBuzz
Fungsi ini menangani array:
- Memastikan input adalah array
- Menggunakan `.map()` untuk memproses setiap elemen
- Setiap elemen diproses oleh `zzzzOrNum`

Hasilnya adalah array baru dengan nilai yang sudah ditransformasi.

---

### 3. Penggunaan assert (test.js)
Digunakan untuk pengujian otomatis:
- `deepStrictEqual` → membandingkan array
- `strictEqual` → membandingkan nilai tunggal
- `throws` → memastikan error terjadi saat input salah

Pendekatan ini memastikan:
- Semua kasus berjalan sesuai harapan
- Program tidak hanya berjalan, tapi juga tervalidasi

---

### 4. tsconfig.json
Digunakan untuk mengaktifkan pengecekan tipe pada JavaScript:
- `checkJs` → mengecek error tipe di JS
- `strict` → aturan lebih ketat
- `noEmit` → tidak menghasilkan file output
- `types: ["node"]` → mengenali module bawaan seperti `assert`

---

## Implementasi

```javascript
// ===== index.js =====

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

// ===== test.js =====

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

// ===== tsconfig.json =====

/*
{
  "compilerOptions": {
    "checkJs": true,
    "allowJs": true,
    "strict": true,
    "noEmit": true,
    "types": ["node"]
  },
  "include": ["./**/*.js"]
}
*/