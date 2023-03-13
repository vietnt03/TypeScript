var arrNum = [1, 2, 3, 4, 5];
var arrStr = ["a", "b", "c", "d"];
function ohop_map(arr, callback) {
    var temp = [];
    for (var i = 0; i < arr.length; i++) {
        var newohop = callback(arr[i]);
        temp.push(newohop);
    }
    return temp;
}
var result = ohop_map(arrNum, function (item) {
    return item * item;
});
console.log(result);
