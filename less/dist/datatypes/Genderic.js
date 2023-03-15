// const arrNum  = [1, 2, 3, 4, 5]
// const arrStr = ["a","b","c","d"] 
// function ohop_map <T> (arr : T[], callback : (item :T)=>T) : T[] {
//     let temp = []
//     for (let i = 0; i < arr.length; i++) {
//         const newohop = callback (arr[i]);
//         temp.push(newohop)
//     }
//     return temp
// }
// const result = ohop_map(arrNum, (item) => {
//     return item * item
// })
// console.log(result);
var arrNum = [100, 12, 3, 5];
var arrStr = ["obama", "iphone", "abc"];
//   function selectionSort <T> (arr : T[], callback : (a :T ,b :T)=>number) : T[] {
//     const len = arr.length;
//     for (let i = 0; i < len - 1; i++) {
//       let minIndex = i;
//       for (let j = i + 1; j < len; j++) {
//         if (callback(arr[j], arr[minIndex]) < 0) {
//           minIndex = j;
//         }
//       }
//       [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
//     }
//     return arr;
//   }
//   console.log(selectionSort(arrStr ,(a,b)=> a-b)); 
// console.log(selectionSort(arrStr, (a, b) => a.localeCompare(b)));
function selectionSort(arr, callback) {
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
console.log(selectionSort(arrStr, function (a, b) { return a.localeCompare(b); }));
//   console.log(selectionSort(arrStr ,(a,b)=> a-b)); 
