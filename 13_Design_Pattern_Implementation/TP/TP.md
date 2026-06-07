# Tugas Pendahuluan Modul 13

## Design Pattern Implementation

### Identitas

* Nama: Aiko Dwijo Hendarto
* NIM: 103122400049
* Kelas: SE-08-02

---

## Repository yang Dianalisis

Link Repository:
https://github.com/gogowap/BIOS

---

## Design Pattern yang Digunakan: MVC (Model-View-Controller)

Pada proyek BIOS ditemukan penerapan design pattern MVC (Model-View-Controller). Pola ini digunakan untuk memisahkan antara pengelolaan data, logika aplikasi, dan penanganan request sehingga kode menjadi lebih terstruktur, mudah dipelihara, dan mudah dikembangkan.

MVC terdiri dari tiga komponen utama, yaitu Model, Controller, dan Route.

---

## 1. Model

Model bertugas mengelola data dan berinteraksi langsung dengan database.

Contoh implementasi terdapat pada file `src/models/loanModel.ts`.

```ts
export const LoanModel = {
  async findAll(): Promise<Loan[]> {
    const [rows] = await pool.execute<RowDataPacket[]>(`
      SELECT l.*, b.title as book_title, m.name as member_name
      FROM loans l
      JOIN books b ON l.book_id = b.id
      JOIN members m ON l.member_id = m.id
      ORDER BY l.created_at DESC
    `);

    return rows as Loan[];
  }
};
```

Kode tersebut menunjukkan bahwa Model bertugas mengambil data dari database tanpa menangani request pengguna secara langsung.

---

## 2. Controller

Controller bertugas menerima request dari client, memproses logika aplikasi, lalu memberikan response kembali kepada client.

Contoh implementasi terdapat pada file `src/controllers/loanController.ts`.

```ts
async getAll(_req: Request, res: Response, next: NextFunction) {
  try {
    const loans = await LoanService.getAllLoans();

    res.json({
      success: true,
      data: loans
    });
  } catch (err) {
    next(err);
  }
}
```

Controller menghubungkan request dari pengguna dengan proses bisnis aplikasi.

---

## 3. Route

Route bertugas menghubungkan endpoint dengan controller yang sesuai.

Contoh implementasi terdapat pada file `src/routes/loanRoutes.ts`.

```ts
router.get("/overdue", LoanController.getOverdue);
router.get("/", LoanController.getAll);
router.post("/", LoanController.create);
router.put("/:id/return", LoanController.returnBook);
```

Route menentukan controller mana yang akan dijalankan ketika endpoint tertentu diakses.

---

## Kesimpulan

Berdasarkan hasil analisis, proyek BIOS menerapkan design pattern MVC (Model-View-Controller). Hal ini terlihat dari pemisahan struktur program menjadi Model, Controller, dan Route yang memiliki tanggung jawab berbeda.

Dengan menggunakan MVC, struktur kode menjadi lebih rapi, mudah dipahami, serta memudahkan proses pengembangan dan pemeliharaan aplikasi di masa mendatang.
