const x = 10;
if (x < 11) {
    console.log("BENAR, variable x lebih kecil dari angka 11");
} else {
    console.log("SALAH, variable x lebih besar dari angka 11 ");
}
const jam = 13;
if (jam < 12) {
    console.log("good morning");
} else if (jam >= 12) {
    console.log("good afternoon");
} else {
    console.log("SALAH, variabel x lebih besar dari angka 10");
}

const buah = "Jeruk";
switch (buah) {
    case "Apel":
        console.log("Apel harganya 10 ribu");
        break;
    case "Nanas":
        console.log("Nanas harganya 12 ribu");
        break;
    default:
        console.log("Jeruk sudah habis");
        break;
}