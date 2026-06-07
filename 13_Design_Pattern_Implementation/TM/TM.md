# Tugas Mandiri Modul 13

## Identitas

* Nama: Aiko Dwijo Hendarto
* NIM: 103122400049
* Kelas: SE-08-02

## Event Delegation

Event delegation adalah teknik pada JavaScript yang menggunakan satu event listener pada elemen parent untuk menangani event dari banyak elemen child. Teknik ini memanfaatkan proses bubbling, yaitu ketika event dari child naik ke parent.

Dengan event delegation, program menjadi lebih efisien karena tidak perlu memberikan event listener ke setiap elemen secara terpisah.

## Contoh Tanpa Event Delegation

```js
const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        console.log("Tombol ditekan");
    });
});
```

Pada contoh tersebut, setiap tombol memiliki event listener masing-masing. Jika jumlah tombol sangat banyak, penggunaan memori menjadi lebih besar.

## Contoh Dengan Event Delegation

```js
const container = document.querySelector(".container");

container.addEventListener("click", (event) => {
    if (event.target.classList.contains("btn")) {
        console.log("Tombol ditekan");
    }
});
```

Pada contoh ini, event listener hanya dipasang pada parent yaitu `container`. Ketika tombol ditekan, event akan naik ke parent dan dicek menggunakan `event.target`.

## Cara Kerja

Saat pengguna menekan tombol, event click pertama kali terjadi pada elemen tombol. Setelah itu event akan melakukan bubbling menuju parent. Parent kemudian memeriksa apakah elemen yang ditekan memiliki class tertentu.

Jika sesuai, maka program akan menjalankan aksi yang diinginkan.

## Kelebihan Event Delegation

* Mengurangi penggunaan memori
* Kode lebih rapi dan sederhana
* Mudah menangani elemen yang dibuat secara dinamis
* Performa lebih baik untuk jumlah elemen yang banyak

## Kekurangan Event Delegation

* Tidak semua event mendukung bubbling
* Perlu pengecekan target event secara manual
* Struktur parent dan child harus jelas

## Kesimpulan

Event delegation merupakan teknik penting dalam JavaScript untuk menangani event secara efisien. Dengan menggunakan satu event listener pada parent, program menjadi lebih ringan, rapi, dan mudah dikembangkan terutama pada aplikasi web yang memiliki banyak elemen interaktif.
