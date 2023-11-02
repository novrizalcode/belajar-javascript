for (let i = 0; i < 5; i++) {
    console.log(i);
}

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

const buah = ["Anggur", "Apel", "Pepaya", "Nanas", "Jeruk"];
for (const n in buah) {
    console.log(`${+n 1}. ${buah[n]}`);
}

const buah2 = ["Anggur", "Apel", "Pepaya", "Nanas", "Jeruk"];
for (const x of buah2) {
    console.log(x);
}

const buah3 = ["Anggur", "Apel", "Pepaya", "Nanas", "Jeruk"];
for (const [n, x] of buah3.entries()) {
    console.log(`${+n + 1}. ${x}`);
}

let pengunjung = 0;

while (pengunjung < 20) {
    pengunjung++;
    if (pengunjung > 0) {
        console.log(`Pengunjung ke: ${pengunjung}`);
    }
}

console.log("Baris berikutnya");
let penumpang = 0;

do {
    penumpang += 2;
    console.log(`Jumlah penumpang: ${penumpang}`);
} while (penumpang < 20);

console.log("Akhir dari program");