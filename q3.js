function primeNumber(a) {
    if (a <= 1) {
        return "NO";
    }
    else if (a == 2) {
        return "YES";
    }
    else {
        for (var n = 2; n < a; n++) {
            if (a % n === 0) {
                return "NO";
            }
        }
        return "YES";
    }
}
var d1 = 10;
var d2 = 29;
var d3 = 2;
console.log(primeNumber(d1));
console.log(primeNumber(d2));
console.log(primeNumber(d3));
module.exports = primeNumber;
/* Warangkana Jitwarangkana 660610792 */ 
