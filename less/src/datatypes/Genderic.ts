

const arrNum = [100,12,3,5] 
const arrStr = ["abc","iphone","abc"];


function selectionSort<T>(arr: T[], callback: (a: T, b: T) => number): T[] {
    const len = arr.length;
    
    for (let i = 0; i < len - 1; i++) {  
      for (let j = i + 1; j < len; j++) { 
        if(callback(arr[j], arr[i]) < 0) {
          [arr[j], arr[i]] = [arr[i], arr[j]];
         
        }

      }
      
    }
    return arr;
  }
  function ascendingOrder(a: number, b: number): number {
    return b - a;
  }

  
  
  selectionSort(arrNum, ascendingOrder);
  console.log(arrNum);
  arrStr.sort();
  
  arrStr.sort().reverse();
  console.log(arrStr);
  
  
  




  