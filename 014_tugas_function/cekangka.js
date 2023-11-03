function cekangka(str1, str2) {
    let count1 = 0;
    let count2 = 0;

for (let i = 0; i < str1.length - 2; i++) {
    if (str1[i] === str1[i + 1] && str1[1] === str1[i + 2]) {
        count1++;
        break;
    }
}
for (let i = 0; i < str2.length - 1; i++) {
    if (str2[i] === str2[i + 1]) {
        count2++;
        break;
    }
}
return count1 > 0 && count2 > 0;
}

console.log(cekangka("1212111223", "1211445"));
console.log(cekangka("12345", "111223344"));