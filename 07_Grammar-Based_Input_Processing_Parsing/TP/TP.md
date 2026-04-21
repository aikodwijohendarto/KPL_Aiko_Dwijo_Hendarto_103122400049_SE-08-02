# Modul 7 — Konstruksi Perangkat Lunak

## Tugas Pendahuluan (TP_07)

### Tujuan

Membuat fungsi untuk mengubah deretan angka bertipe string menjadi array berisi number.

---

### Pendekatan

Masalah utama:

* Input bisa berupa **string** atau **array**
* Data bisa mengandung:

  * angka valid (integer, desimal, negatif)
  * data tidak valid (`abc23`)
* Format string tidak konsisten (ada spasi, koma, dll)

Solusi yang digunakan:

1. **Deteksi tipe input**

   * Jika array → langsung diproses
   * Jika string → diparsing menggunakan regex

2. **Parsing string dengan regex**

   ```js
   /-?\d+(\.\d+)?/g
   ```

   Fungsi:

   * `-?` → menangani angka negatif
   * `\d+` → angka
   * `(\.\d+)?` → desimal opsional
   * `g` → ambil semua kecocokan

3. **Konversi ke number**

   * Menggunakan `Number()`

4. **Filter nilai tidak valid**

   * Menggunakan `Number.isNaN`

---

### Implementasi

```javascript
function toNumberArray(input) {
  let arr;

  if (Array.isArray(input)) {
    arr = input;
  } else if (typeof input === "string") {
    const matches = input.match(/-?\d+(\.\d+)?/g);
    arr = matches ? matches : [];
  } else {
    return [];
  }

  return arr
    .map(x => Number(x))
    .filter(x => !Number.isNaN(x));
}
```

---

### Pengujian

```javascript
console.log(toNumberArray("1, 2")); 
// [1, 2]

console.log(toNumberArray(["1", "2"])); 
// [1, 2]

console.log(toNumberArray(" 11,55,33 ")); 
// [11, 55, 33]

console.log(toNumberArray(["0.2", "-11", "abc23"])); 
// [0.2, -11]
```

---

### Analisis

* Fungsi mampu menangani berbagai format input tanpa bergantung pada delimiter tertentu
* Regex lebih fleksibel dibanding `split()`
* Data tidak valid otomatis diabaikan
* Output selalu konsisten berupa array of number

---

### Kesimpulan

Pendekatan berbasis regex memberikan solusi yang lebih robust untuk parsing data tidak terstruktur dibanding metode manual. 