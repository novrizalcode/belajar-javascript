const pemasukan = 1000000;
const pengeluaran = [250000, 80000, 140000, 310000];

const sisaPemasukan = pengeluaran.reduce(function (acc, curr) {
    return acc - curr;
}, pemasukan);
console.log(sisaPemasukan);