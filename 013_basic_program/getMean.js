const getMean = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
};

console.log(getMean([1, 2, 3, 4, 5, 6,]));
console.log(getMean([2, 4, 6, 8, 10, 12, 14]));
console.log(getMean([4, 6, 8, 3, 5, 8, 1, 7, 3, 9]));