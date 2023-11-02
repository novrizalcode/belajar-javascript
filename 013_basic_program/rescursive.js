const getEndOfGeometryLine = (a, n) => {
    let un = a;
    let ul = n - 1;
    if (ul > 0) {
        return getEndOfGeometryLine(un + a, u1);
    } else {
        return un;
    } 
};

console.log(getEndOfGeometryLine(2.5, 4));