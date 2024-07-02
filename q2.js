function arrayStringify(a) {
    var n = 0;
    var num = '';
    for (var i = 0; i <= a[n]; i++) {
        num += a[n];
        n++;
    }
    console.log(num);
}
var c1 = [1, 2, 3];
var c2 = [10, 9, 8, 7, 6, 5];
var c3 = [];
console.log(arrayStringify(c1));
console.log(arrayStringify(c2));
console.log(arrayStringify(c3));
module.exports = arrayStringify;
/* Warangkana Jitwarangkana 660610792 */ 
