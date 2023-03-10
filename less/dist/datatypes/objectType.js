// array 
//string
var arr = ['a', 'b', 'c', 'd', 'e', 'f'];
//
var nm = [[1, 2, 3], [4, 5, 6]];
//any 
var st3 = 10;
st3 = "dgagsd";
st3 = [1, 2, 3];
// tuple : mặc định là 3 phần tử 
var tuple = ['a', 1, false];
//Enum
var STATUS;
(function (STATUS) {
    STATUS[STATUS["PENDING"] = 0] = "PENDING";
    STATUS[STATUS["REJECTING"] = 1] = "REJECTING";
    STATUS[STATUS["ACB"] = 2] = "ACB";
})(STATUS || (STATUS = {}));
var trangthai1 = STATUS.PENDING;
console.log(trangthai1);
var code;
(function (code) {
    code[code["ok2"] = 200] = "ok2";
    code[code["ok4"] = 300] = "ok4";
    code[code["ok5"] = 400] = "ok5";
})(code || (code = {}));
