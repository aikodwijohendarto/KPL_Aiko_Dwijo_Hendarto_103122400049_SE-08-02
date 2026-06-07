export function hitungHuruf(teks) {

    return teks.replace(/[^a-zA-Z]/g, '').length;

}

export function hitungKata(teks) {

    const kata = teks.match(/[a-zA-Z]+/g);

    return kata ? kata.length : 0;

}