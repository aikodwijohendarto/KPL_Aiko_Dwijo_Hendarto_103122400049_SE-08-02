const editor = document.getElementById("editor");
const hf = document.getElementById("hf");
const hb = document.getElementById("hb");
const hk = document.getElementById("hk");

const btnBesar = document.getElementById("huruf-besar");
const btnKecil = document.getElementById("huruf-kecil");

const btnGelap = document.getElementById("tombol-gelap");
const btnTerang = document.getElementById("tombol-terang");

editor.addEventListener("input", (e) => {
    const text = e.target.value;

    hf.textContent = text.length;

    let besar = 0;
    let kecil = 0;

    for (let c of text) {
        if (c >= 'A' && c <= 'Z') besar++;
        if (c >= 'a' && c <= 'z') kecil++;
    }

    hb.textContent = besar;
    hk.textContent = kecil;
});

btnBesar.addEventListener("click", () => {
    editor.value = editor.value.toUpperCase();
});

btnKecil.addEventListener("click", () => {
    editor.value = editor.value.toLowerCase();
});

btnGelap.addEventListener("click", () => {
    document.documentElement.classList.add("mode-gelap");
});

btnTerang.addEventListener("click", () => {
    document.documentElement.classList.remove("mode-gelap");
});