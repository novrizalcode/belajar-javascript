const beritaPertama = true;
const beritaKedua = false;
const beritaKetiga = false;
const beritaKeempat = true;

console.log(beritaPertama && beritaKedua);
console.log(beritaPertama && beritaKeempat);
console.log(beritaKedua || beritaKetiga);
console.log(!beritaKetiga);
console.log(!beritaKeempat);
console.log(!beritaKetiga && !beritaKeempat);
console.log(!beritaKetiga || !beritaKeempat);