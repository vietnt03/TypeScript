

const arrNum1 = [100,12,3,5] 
const arrStr1 = ["abc","iphone","abc"];


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
    return a - b;
  }
  
  selectionSort(arrNum1, ascendingOrder);
  console.log(arrNum1);
  arrStr1.sort();
  
  arrStr1.sort().reverse();
  console.log(arrStr1);
  
  
  




  