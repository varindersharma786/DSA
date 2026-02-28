// Array Decrration

let person={
    name:"manjit",
    age:"24"
}
let arr=["helow",12,"hdy"];

// add any type of variableot object to Array


arr.push(person)

// Add to End of an Array
arr.push("orange")


// Remove from End of an Array
arr.pop()

// add the top  of an Array
arr.unshift(1)

// Remove from the top  of an Array

arr.unshift(1)
// console.log(arr)


// For Looping

// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     console.log(element)
// }
// While Looping

// let i=0
// while (i<arr.length) {
//     const element = arr[i];
//     console.log(element)
//     i++;
// }


// inbuilt looping

let numbers=[1,2,3,4,5,6,7,8,9]

// <===================== map   ===================>

//  let mapNumbers=numbers.map((item)=>{
// return item+5
// })

// <===================== Filter  ===================>
//  let filterNumbers=numbers.filter((item,index,array)=>{
  
//     return item>2
// })

// <===================== Reducer  ===================>

// let sum=numbers.reduce((prev,item)=>{
//     return prev+item
// },0)

// <===================== Some  ===================>

    let someFunction=numbers.some((item)=>{
        return item>3
    })

    let everyFunction=numbers.every((item)=>{
        return item>0
    })

console.log(everyFunction)