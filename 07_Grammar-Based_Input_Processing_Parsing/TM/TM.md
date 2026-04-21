# Modul 7 — Konstruksi Perangkat Lunak

## Tugas Mandiri (TM_07)

### Tujuan

Membuat fungsi `parseRobots` untuk membaca isi file `robots.txt` lalu mengubahnya menjadi object JavaScript yang bisa diproses lebih lanjut.

---

### Gambaran Masalah

File `robots.txt` itu bentuknya teks biasa, tapi isinya punya aturan.
Masalahnya:

* Tidak terstruktur seperti JSON
* Bisa punya banyak `User-agent`
* Satu aturan bisa berlaku ke beberapa agent sekaligus
* Ada pemisahan blok (baris kosong)

Jadi tidak bisa asal split, perlu diparsing dengan logika.

---

### Bentuk Output yang Diinginkan

Hasil akhirnya harus seperti ini:

```js id="7y9x2l"
{
  agents: {
    "*": {
      Allow: ["/"],
      Disallow: []
    },
    "googlebot": {
      Allow: [],
      Disallow: ["/private"]
    }
  },
  Sitemap: ["https://example.com/sitemap.xml"]
}
```

Poin penting:

* Semua agent masuk ke dalam `agents`
* `Allow` dan `Disallow` berupa array
* `Sitemap` juga array, walaupun cuma satu

---

### Cara Kerja Program

1. **Pisahkan teks per baris**
   Semua isi file dipecah jadi baris-baris supaya bisa diproses satu per satu.

2. **Bersihkan tiap baris**

   * Hilangkan spasi
   * Abaikan baris kosong
   * Abaikan komentar (`#`)

3. **Pisahkan key dan value**
   Contoh:

   ```txt id="d1x3ac"
   User-agent: *
   ```

   Dipisah jadi:

   * key → `user-agent`
   * value → `*`

4. **Gunakan konsep “agent aktif”**
   Saat ketemu:

   ```txt id="l2m9ks"
   User-agent: *
   User-agent: Googlebot
   ```

   berarti dua agent ini aktif.
   Rule setelahnya berlaku ke keduanya.

5. **Masukkan data ke object**

   * `Allow` → masuk ke array Allow agent
   * `Disallow` → masuk ke array Disallow agent
   * `Sitemap` → disimpan global

6. **Reset saat blok baru**
   Baris kosong berarti aturan sebelumnya selesai.

---

### Implementasi

```javascript id="s8m2qp"
function parseRobots(text) {
  const result = {
    agents: {},
    Sitemap: []
  };

  let active = [];

  text.split("\n").forEach((raw) => {
    const line = raw.trim();

    if (!line || line.startsWith("#")) {
      active = [];
      return;
    }

    const idx = line.indexOf(":");
    if (idx === -1) return;

    const key = line.slice(0, idx).trim().toLowerCase();
    const value = line.slice(idx + 1).trim();

    if (key === "user-agent") {
      const agent = value.toLowerCase();

      if (!result.agents[agent]) {
        result.agents[agent] = { Allow: [], Disallow: [] };
      }

      active.push(agent);
      return;
    }

    if (key === "allow" || key === "disallow") {
      if (!value) return;

      active.forEach(agent => {
        if (key === "allow") {
          result.agents[agent].Allow.push(value);
        } else {
          result.agents[agent].Disallow.push(value);
        }
      });

      return;
    }

    if (key === "sitemap") {
      if (value) result.Sitemap.push(value);
    }
  });

  return result;
}

module.exports = parseRobots;
```

---

### Inti yang Harus Dipahami

* Ini bukan sekadar baca string, tapi **mengubah teks jadi struktur data**
* Kunci utamanya ada di:

  * tracking agent aktif
  * grouping aturan dengan benar
* Output harus **sesuai format yang diminta**, bukan sekadar “kelihatan benar”

---

### Kesimpulan

Parsing `robots.txt` butuh pemahaman alur, bukan hanya fungsi string.
Kalau struktur output tidak sesuai, walaupun logika benar, hasil tetap dianggap salah oleh sistem pengujian.
