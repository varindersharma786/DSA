
let num1 = [45, 78, 96, 12, 32, 96, 78, 35,96,45,35];

// function secondlargestElement(arr){
//     let uniqueArray=Array.from(new Set(arr));
//      uniqueArray.sort((a,b)=>{
//         return b-a;
//      });

//      return uniqueArray[1]

// }

// array = [45, 78, 96, 12, 32]
// firstlargest =96;
// secondlargest=78;

// function secondlargestElementOptimized(arr){
//     let firstlargest=Number.NEGATIVE_INFINITY;
//     let secondlargest=Number.NEGATIVE_INFINITY;
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i]>firstlargest){
//             secondlargest=firstlargest;
//             firstlargest=arr[i]
//         }
//         else if(arr[i] != firstlargest && arr[i]>secondlargest){
//             secondlargest=arr[i]
//         }
        
//     }
// return secondlargest;
// }

// console.log(secondlargestElementOptimized(num1))