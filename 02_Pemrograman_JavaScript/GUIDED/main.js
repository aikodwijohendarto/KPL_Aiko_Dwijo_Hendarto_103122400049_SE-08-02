function ganjilGenap(angka) {
    if (angka % 2 === 0) {
        return "Genap";
    } else {
        return "Ganjil";
    }
}

console.log(ganjilGenap(10));


function absoluteValue(input) {
    if (input < 0) {
        return -input;
    } else {
        return input;
    }
}

console.log(absoluteValue(-145));


const user = {
    firstName: "Aiko",
    lastName: "Dwijo Hendarto",
    age: 18
};

console.log(`Halo, nama saya ${user.firstName}`);