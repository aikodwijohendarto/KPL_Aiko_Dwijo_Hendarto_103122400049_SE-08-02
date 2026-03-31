const elemenEditor = document.getElementById("editor-kecil");
const elemenHf = document.getElementById("hf");
const elemenHb = document.getElementById("hb");
const elemenHk = document.getElementById("hk");
const tombolCek = document.getElementById("cek-teks");
const popup = document.getElementById("popup");
const tombolTutup = document.getElementById("tutup");

function HitungHuruf(){

    const teks = elemenEditor.value;
    const teksBaru = teks.split(" ");

    let jumlahHuruf = 0;
    let jumlahHurufBesar = 0;
    let jumlahHurufKecil = 0;

    for(let i = 0; i < teksBaru.length; i++){

        const kata = teksBaru[i];
        jumlahHuruf += kata.length;

        for(let j = 0; j < kata.length; j++){

            const huruf = kata[j];

            if(huruf >= "A" && huruf <= "Z"){
                jumlahHurufBesar++;
            }else if(huruf >= "a" && huruf <= "z"){
                jumlahHurufKecil++;
            }
        }
    }

    elemenHf.textContent = jumlahHuruf;
    elemenHb.textContent = jumlahHurufBesar;
    elemenHk.textContent = jumlahHurufKecil;
}

tombolCek.addEventListener("click", function(){

    HitungHuruf();

    if(elemenEditor.value.trim() !== ""){
        popup.style.display = "flex";
    }

});

tombolTutup.addEventListener("click", function(){
    popup.style.display = "none";
});