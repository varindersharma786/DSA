// Rest operator ==> It allows a function to accept an infinite number of argumnets as an array

let num1=[12,45,78];
let num2=[12,45,32,45,78,25,63]
function restOperator(...numbers){
    const data =[...numbers[0],...numbers[1]]
    return [...data,...numbers];
}

console.log(restOperator(num1,num2,"string",12,"yuewio"))

// Spread Operator ===> It expends elemet of an Array, object or string

console.log([...num1,...num2])