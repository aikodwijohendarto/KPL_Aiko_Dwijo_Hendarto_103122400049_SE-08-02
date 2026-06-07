# Tugas Mandiri Modul 14

## Clean Code

### Identitas

* Nama: Aiko Dwijo Hendarto
* NIM: 103122400049
* Kelas: SE-08-02

---

## Jawaban

Menurut saya, kode kedua jauh lebih baik dan lebih ingin saya pilih jika harus mencari bug atau memperbaiki masalah pada jam 1 malam.

Kode pertama:

```javascript id="7cr3el"
function processUser(user) {
    if (user) {
        if (user.isActive) {
            if (user.hasPermission) {
                return doSomething(user)
            }
        }
    }
    return null
}
```

Kode tersebut memiliki nested if yang terlalu dalam. Saat membaca kode seperti ini, otak harus mengikuti banyak lapisan kondisi sebelum memahami tujuan akhirnya. Ketika sedang lelah atau mengantuk di malam hari, kode seperti ini lebih mudah menyebabkan kesalahan analisis.

Selain itu, jika nanti ada penambahan kondisi baru, misalnya:

```javascript id="r8o4br"
if (user.isVerified)
```

maka nesting akan semakin dalam dan membuat kode semakin sulit dibaca.

---

Sedangkan kode kedua:

```javascript id="57s91z"
function processUser(user) {
    if (!isValidCandidate(user)) return null;
    return doSomething(user);
}

function isValidCandidate(user) {
    return user && user.isActive && user.hasPermission;
}
```

lebih bersih dan lebih mudah dipahami karena:

* Kondisi dipisahkan ke fungsi khusus
* Nama fungsi menjelaskan tujuan kode
* Tidak ada nested if berlapis
* Alur program lebih singkat
* Lebih mudah melakukan debugging
* Lebih mudah melakukan testing

Saat membaca:

```javascript id="2r4y88"
isValidCandidate(user)
```

programmer langsung memahami bahwa fungsi tersebut melakukan validasi pengguna tanpa perlu membaca detail implementasinya terlebih dahulu.

Kode seperti ini juga lebih maintainable karena jika validasi berubah, programmer hanya perlu mengubah fungsi:

```javascript id="rk5e8v"
isValidCandidate()
```

tanpa menyentuh logic utama.

---

## Kesimpulan

Saya akan memilih kode kedua karena lebih clean, readable, modular, dan lebih mudah dipelihara, terutama saat harus debugging dalam kondisi lelah pada tengah malam.
