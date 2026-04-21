# Modul 8 — Tugas Pendahuluan

## Penjelasan

Pada tugas ini, saya diminta untuk menampilkan tanggal saat ini dengan format bahasa Indonesia, misalnya seperti:
`Sabtu, 18 April 2026`.

Awalnya terlihat sederhana, tapi kalau dilakukan manual (misalnya menyusun nama hari dan bulan sendiri), hasilnya jadi tidak fleksibel dan rawan salah. Karena itu digunakan `Intl.DateTimeFormat`, yaitu fitur bawaan JavaScript yang memang dibuat untuk menangani format tanggal sesuai bahasa dan wilayah tertentu.

## Cara Kerja Program

Program dimulai dengan mengambil waktu sekarang dari sistem menggunakan:

```js
new Date()
```

Nilai ini kemudian diformat menggunakan `Intl.DateTimeFormat` dengan locale `id-ID` agar hasilnya mengikuti format Indonesia.

Bagian ini yang menentukan bentuk outputnya:

* `weekday: 'long'` → menampilkan nama hari lengkap (contoh: Sabtu)
* `day: '2-digit'` → tanggal dengan dua digit (contoh: 18)
* `month: 'long'` → nama bulan lengkap (contoh: April)
* `year: 'numeric'` → tahun dalam angka (contoh: 2026)

Setelah itu, tanggal yang sudah diformat ditampilkan menggunakan `console.log()`.

## Hasil yang Didapat

Output yang muncul akan mengikuti format seperti ini:

```text
Sabtu, 18 April 2026
```

Tanggal bisa berbeda tergantung kapan program dijalankan, tapi formatnya akan tetap konsisten.

## Inti yang Dipelajari

Yang penting dari tugas ini bukan sekadar menampilkan tanggal, tapi memahami bahwa:

* Format tanggal seharusnya tidak dibuat manual
* Gunakan tools bawaan seperti `Intl` agar lebih akurat dan scalable
* Locale (`id-ID`) berperan besar dalam menentukan bahasa output

Dengan cara ini, program jadi lebih rapi, tidak bergantung pada hardcode, dan siap digunakan di berbagai kondisi.
