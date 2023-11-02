function getMode(arr) {
    const data = {};
    arr.forEach((num) => {
        if (!data[num]) {
            data[num] = 0;
        }
        data[num]++;
    });

    let max = 0;
    let result = [];
    for (let key in data) {
        if (data[key] > max) {
            max = data[key];
            results = [key];
        } else if (data[key] === max) {
            results.push(key);
        }
    }

    return { results, max };
}

console.log(getMode([1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5]));
console.log(getMode([4, 6, 4, 7, 9, 8, 6, 3, 4, 5, 6, 2, 4, 9, 3]));
console.log(getMode([5, 7, 3, 5, 1, 5, 7, 9, 8, 2, 7, 4, 4, 1, 9]));