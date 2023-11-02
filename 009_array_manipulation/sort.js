const arrayPoint = [40, 100, 1, 5, 25, 10];
function sortAscending(point) {
    let result = point.sort(function (a, b) {
        return a - b;
    });

    return result;
}

function sortDescending(point) {
    let result = point.sort(function (a, b) {
        return b - a;
    });

    return result;
}
console.log(sortAscending(arrayPoint));
console.log(sortDescending(arrayPoint));