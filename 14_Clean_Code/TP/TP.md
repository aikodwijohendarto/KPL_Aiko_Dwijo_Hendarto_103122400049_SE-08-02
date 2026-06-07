# Tugas Pendahuluan Modul 14

## Clean Code

### Identitas

* Nama: Aiko Dwijo Hendarto
* NIM: 103122400049
* Kelas: SE-08-02

---

## Refaktorisasi Kode

### Kode Awal

```javascript id="xk7l2p"
function fetchOrderDetails(orderId, token) {
    fetch(`https://example.com/api/order/${orderId}`, {
        headers: {
            'Authorization': token
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to fetch order details');
        }
        return response.json();
    })
    .then(order => {

        const modal = document.getElementById('orderModal');
        const detailsDiv = modal.querySelector('#orderDetails');

        detailsDiv.innerHTML = '';

        const header = document.createElement('h3');
        header.textContent = `Order ID: ${order.id}`;
        detailsDiv.appendChild(header);

        const status = document.createElement('p');
        status.textContent = `Status: ${order.status}`;
        detailsDiv.appendChild(status);

        modal.style.display = 'block';

        const closeBtn = modal.querySelector('.close');

        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        const confirmBtn = modal.querySelector('#confirmOrderBtn');

        if (order.status === 'Delivered') {
            confirmBtn.style.display = 'none';
        } else {
            confirmBtn.addEventListener('click', () => {
                confirmOrder(order.id, token);
            });
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
```

---

## Hasil Refaktorisasi

```javascript id="b2q7mp"
async function fetchOrderDetails(orderId, token) {
    try {
        const order = await getOrderData(orderId, token);

        showOrderModal(order, token);

    } catch (error) {
        console.error("Error:", error);
    }
}

async function getOrderData(orderId, token) {
    const response = await fetch(
        `https://example.com/api/order/${orderId}`,
        {
            headers: {
                Authorization: token
            }
        }
    );

    if (!response.ok) {
        throw new Error("Failed to fetch order details");
    }

    return response.json();
}

function showOrderModal(order, token) {
    const modal = document.getElementById("orderModal");
    const detailsDiv = modal.querySelector("#orderDetails");

    clearOrderDetails(detailsDiv);

    renderOrderHeader(detailsDiv, order.id);
    renderOrderStatus(detailsDiv, order.status);

    setupCloseButton(modal);
    setupConfirmButton(modal, order, token);

    modal.style.display = "block";
}

function clearOrderDetails(detailsDiv) {
    detailsDiv.innerHTML = "";
}

function renderOrderHeader(detailsDiv, orderId) {
    const header = document.createElement("h3");

    header.textContent = `Order ID: ${orderId}`;

    detailsDiv.appendChild(header);
}

function renderOrderStatus(detailsDiv, statusText) {
    const status = document.createElement("p");

    status.textContent = `Status: ${statusText}`;

    detailsDiv.appendChild(status);
}

function setupCloseButton(modal) {
    const closeBtn = modal.querySelector(".close");

    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });
}

function setupConfirmButton(modal, order, token) {
    const confirmBtn = modal.querySelector("#confirmOrderBtn");

    if (order.status === "Delivered") {
        confirmBtn.style.display = "none";
        return;
    }

    confirmBtn.style.display = "block";

    confirmBtn.addEventListener("click", () => {
        confirmOrder(order.id, token);
    });
}
```

---

## Penjelasan Refaktorisasi

Beberapa perbaikan clean code yang dilakukan:

### 1. Memecah Fungsi Besar Menjadi Fungsi Kecil

Kode awal memiliki satu fungsi yang melakukan terlalu banyak pekerjaan sekaligus, seperti:

* Fetch API
* Menampilkan modal
* Membuat elemen HTML
* Mengatur tombol
* Menangani event

Pada hasil refaktorisasi, setiap fungsi memiliki satu tanggung jawab saja sehingga lebih mudah dibaca dan dipelihara.

---

### 2. Menggunakan Nama Fungsi yang Jelas

Nama fungsi dibuat lebih deskriptif seperti:

* `getOrderData()`
* `showOrderModal()`
* `renderOrderHeader()`
* `setupConfirmButton()`

Hal ini membuat programmer lebih cepat memahami tujuan fungsi tanpa harus membaca isi kode secara detail.

---

### 3. Mengurangi Nested Code

Kode awal memiliki banyak blok `.then()` dan kondisi di dalamnya sehingga membuat struktur kode cukup panjang.

Refaktorisasi menggunakan:

```javascript id="7e9j2n"
async/await
```

agar alur program lebih mudah dibaca seperti kode biasa.

---

### 4. Meningkatkan Readability

Kode dipisahkan menjadi bagian-bagian kecil sehingga tampil lebih rapi dan tidak terlalu padat.

Hal ini penting dalam clean code karena kode lebih sering dibaca dibanding ditulis.

---

### 5. Mempermudah Maintenance dan Debugging

Jika ada bug pada tampilan status order, programmer cukup memeriksa fungsi:

```javascript id="d4v8pk"
renderOrderStatus()
```

tanpa harus membaca seluruh program.

Jika ada perubahan pada tombol confirm, cukup ubah:

```javascript id="l2r5wj"
setupConfirmButton()
```

---

## Kesimpulan

Hasil refaktorisasi membuat kode menjadi lebih bersih, modular, mudah dibaca, dan lebih mudah dikembangkan di masa depan sesuai prinsip clean code.
