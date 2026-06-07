export function tambah(x, y) {
    return x + y;
}

export function kurang(x ,y) {
    return x - y;
}

export function kali(x, y) {
    return x * y;
}

export function bagi(x, y) {
    return x / y;
}

export function pangkat(x, y) {
    return x ** y;
}

export function plsv_dua(x, b) {
    return b;
}

/**
 * 
 * @param {string} x
 * @param {string} a
 * @param {string} b
 */
export function plsv_tiga(x, a, b) {
    const k = b - a;

    // Jika hanya "x" saja 
    if (x.length === 1) {
        return k;
    } else if (x.length === 2) {
        const v = parseInt(x);
        return bagi(k, v);
    }

    return 0;
}