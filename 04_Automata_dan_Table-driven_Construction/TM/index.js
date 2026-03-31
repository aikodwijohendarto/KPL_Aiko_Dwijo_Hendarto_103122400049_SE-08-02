const editor = document.getElementById("editor");
const hf = document.getElementById("hf");
const hb = document.getElementById("hb");
const hk = document.getElementById("hk");

const btnBesar = document.getElementById("huruf-besar");
const btnKecil = document.getElementById("huruf-kecil");

const btnTerang = document.getElementById("tombol-terang");
const btnGelap = document.getElementById("tombol-gelap");
const btnSepia = document.getElementById("tombol-sepia");

editor.addEventListener("input", (e) => {
    let text = e.target.value;

    hf.textContent = text.length;

    let besar = 0;
    let kecil = 0;

    for (let i = 0; i < text.length; i++) {
        if (text[i] >= 'A' && text[i] <= 'Z') besar++;
        if (text[i] >= 'a' && text[i] <= 'z') kecil++;
    }

    hb.textContent = besar;
    hk.textContent = kecil;
});

btnBesar.onclick = () => {
    editor.value = editor.value.toUpperCase();
};

btnKecil.onclick = () => {
    editor.value = editor.value.toLowerCase();
};

function setMode(mode) {
    document.documentElement.classList.remove("light-mode");
    document.documentElement.classList.remove("dark-mode");
    document.documentElement.classList.remove("sepia-mode");

    document.documentElement.classList.add(mode);
}

btnTerang.onclick = () => setMode("light-mode");
btnGelap.onclick = () => setMode("dark-mode");
btnSepia.onclick = () => setMode("sepia-mode");