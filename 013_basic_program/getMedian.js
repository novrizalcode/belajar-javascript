function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

const getMedian = (arr) => {
    const sortedArr = bubbleSort(arr);
    if (sortedArr.length % 2 === 0) {
        return (
            (sortedArr[sortedArr.length / 2] + sortedArr[sortedArr.length / 2 - 1]) /
            2
        );
    } else {
        return sortedArr[Math.floor(sortedArr.length/ 2)];
    }
};

console.log(getMedian([4, 6, 8, 3, 5, 8, 1, 3, 9, 7]));
console.log(getMedian([10, 90, 20, 80, 30, 70, 40, 60, 50]));
console.log(getMedian([13, 11, 15, 12, 16, 17, 19, 16, 18]));