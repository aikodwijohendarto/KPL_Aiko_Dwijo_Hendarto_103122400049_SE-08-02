const editor = document.getElementById("editor")

const totalHuruf = document.getElementById("jumlah")
const hurufBesar = document.getElementById("besar")
const hurufKecil = document.getElementById("kecil")

const btnUpper = document.getElementById("btn-upper")
const btnLower = document.getElementById("btn-lower")
const btnSentence = document.getElementById("btn-sentence")

function hitungTeks(teks){

totalHuruf.textContent = teks.length

const besar = teks.match(/[A-Z]/g)
hurufBesar.textContent = besar ? besar.length : 0

const kecil = teks.match(/[a-z]/g)
hurufKecil.textContent = kecil ? kecil.length : 0

}

editor.addEventListener("input",(e)=>{
hitungTeks(e.target.value)
})

btnUpper.addEventListener("click",()=>{
editor.value = editor.value.toUpperCase()
hitungTeks(editor.value)
})

btnLower.addEventListener("click",()=>{
editor.value = editor.value.toLowerCase()
hitungTeks(editor.value)
})

btnSentence.addEventListener("click",()=>{

let teks = editor.value.toLowerCase()

teks = teks.replace(/(^\w|\.\s*\w)/g,(c)=>c.toUpperCase())

editor.value = teks

hitungTeks(teks)

})