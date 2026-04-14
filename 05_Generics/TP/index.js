function hitung(str, tipe) {
  let count = 0;

  for (const c of str) {
    if (tipe === "huruf" && c === " ") continue;
    count++;
  }

  return count;
}

module.exports = hitung;