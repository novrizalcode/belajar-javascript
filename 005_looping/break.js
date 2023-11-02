 
function printFactorOf(n) {
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            if (i === 21) {
                console.log("EROR");
                break;
            }
            console.log(i);
        }
    }
}