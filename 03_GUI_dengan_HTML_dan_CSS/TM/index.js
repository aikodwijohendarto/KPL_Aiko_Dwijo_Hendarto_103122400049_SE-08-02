const editor = document.getElementById("editor-kecil");
const hf = document.getElementById("hf");
const hb = document.getElementById("hb");
const hk = document.getElementById("hk");

const btnBesar = document.getElementById("huruf-besar");
const btnKecil = document.getElementById("huruf-kecil");

editor.addEventListener("input", function () {

    let total = 0;
    let besar = 0;
    let kecil = 0;

    const teks = editor.value;

    for (let i = 0; i < teks.length; i++) {

        const c = teks[i];

        if ((c >= "A" && c <= "Z") || (c >= "a" && c <= "z")) {
            total++;
        }

        if (c >= "A" && c <= "Z") {
            besar++;
        } else if (c >= "a" && c <= "z") {
            kecil++;
        }
    }

    hf.textContent = total;
    hb.textContent = besar;
    hk.textContent = kecil;
});

btnBesar.addEventListener("click", function () {
    editor.value = editor.value.toUpperCase();
});

btnKecil.addEventListener("click", function () {
    editor.value = editor.value.toLowerCase();
});