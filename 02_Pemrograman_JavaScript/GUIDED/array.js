const kotaDikunjungi = ["Jakarta", "Bandung", "Purwokerto"];

kotaDikunjungi.unshift("Yogyakarta");
kotaDikunjungi.push("Solo");
kotaDikunjungi.pop();
kotaDikunjungi.splice(0, 1);
kotaDikunjungi[1] = "Klaten";
console.log(kotaDikunjungi);