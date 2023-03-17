var arrNum1 = [100, 12, 3, 5];
var arrStr1 = ["abc", "iphone", "abc"];
function selectionSor(arr, callback) {
    var _a;
    var len = arr.length;
    for (var i = 0; i < len - 1; i++) {
        for (var j = i + 1; j < len; j++) {
            if (callback(arr[j], arr[i]) < 0) {
                _a = [arr[i], arr[j]], arr[j] = _a[0], arr[i] = _a[1];
            }
        }
    }
    return arr;
}
function ascendingOrder1(a, b) {
    return b - a;
}
selectionSor(arrNum1, ascendingOrder1);
console.log(arrNum1);
arrStr1.sort().reverse();
console.log(arrStr1);
