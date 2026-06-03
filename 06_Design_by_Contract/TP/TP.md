# Tugas Pendahuluan 6

## Esai: Penggunaan Asersi vs Eksepsi

Menurut saya, penggunaan asersi dan eksepsi itu sebenarnya tidak bisa dipilih salah satu saja, karena keduanya punya fungsi yang berbeda. Kalau dilihat dari contoh fungsi pembagian, asersi lebih cocok dipakai untuk memastikan bahwa kode kita berjalan sesuai dengan asumsi yang sudah kita buat sejak awal.

Misalnya, kita yakin bahwa parameter `a` dan `b` pasti angka dan `b` tidak mungkin nol. Nah, di situ asersi berfungsi untuk “mengunci” asumsi tersebut. Kalau ternyata asersi gagal, berarti ada kesalahan dari sisi programmer, bukan dari pengguna. Jadi, asersi ini lebih ke alat untuk mendeteksi bug saat development.

Di sisi lain, eksepsi menurut saya lebih realistis untuk digunakan dalam kondisi nyata. Soalnya, dalam aplikasi yang benar-benar dipakai user, kita tidak bisa menjamin semua input itu valid. Bisa saja user memasukkan nilai yang salah, atau ada kondisi tak terduga lainnya. Dengan eksepsi, kita bisa menangani error tersebut tanpa membuat program langsung berhenti. Program tetap jalan, tapi memberikan respon error yang jelas.

Kalau harus memilih, saya tidak setuju kalau kita pakai hanya asersi saja atau hanya eksepsi saja. Kalau hanya asersi, program jadi tidak tahan terhadap kesalahan dari luar. Tapi kalau hanya eksepsi, kita jadi tidak punya kontrol yang jelas terhadap asumsi dasar dalam kode kita.

Menurut saya, yang paling tepat adalah menggabungkan keduanya. Asersi digunakan untuk memastikan logika internal tetap benar, sedangkan eksepsi digunakan untuk menangani kesalahan dari luar, seperti input user. Dengan cara ini, program tidak hanya benar secara logika, tapi juga lebih kuat dan siap dipakai di kondisi nyata.