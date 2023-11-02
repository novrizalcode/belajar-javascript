let result = [];
function getEvenNumber(N) {
    for (let i = 1; i <= N * 2; i++) {
        if (i % 2 === 0) {
            result.push(i);
        }
    }
}

console.log(result);

getEvenNumber(6);
console.log(result);