const arrNum  = [1, 2, 3, 4, 5]
const arrStr = ["a","b","c","d"] 

function ohop_map <T> (arr : T[], callback : (item :T)=>T) : T[] {
    let temp = []
    for (let i = 0; i < arr.length; i++) {
        const newohop = callback (arr[i]);
        temp.push(newohop)
        
    }
    return temp
}
const result = ohop_map(arrNum, (item) => {
    return item * item
})
console.log(result);
