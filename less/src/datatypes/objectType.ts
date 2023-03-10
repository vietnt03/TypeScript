// array 
//string
const arr : string[] =['a','b','c','d','e','f'];
//
const nm: number[][] =[[1,2,3], [4,5,6]]
//any 
var st3: any = 10
 st3= "dgagsd";
 st3 = [1,2,3]

// tuple : mặc định là 3 phần tử 

const tuple :[ string, number,boolean ] = ['a',1, false]


//Enum
enum STATUS {PENDING,REJECTING, ACB}

const trangthai1 : STATUS = STATUS.PENDING;

console.log(trangthai1);
enum code {ok2=200 ,ok4 = 300 ,ok5 = 400}

// 
const uppercase = (a:string | number) => {
    if(typeof a == "string"){
        console.log(a.toLowerCase());
        
    }



    a.toLocaleString().toLowerCase()
}

