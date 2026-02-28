//  <=======================  Fibonacci Series  [0,1,1,2,3,5] ======================>

// function fibonacciSeries(num) {
//   const fib = [0, 1];
//   for (let i = 2; i < num; i++) {
//     result = fib[i - 1] + fib[i - 2];
//     fib.push(result);
//   }
//   return fib;
// }
// console.log(fibonacciSeries(10));

// <======================= Fictorial Series ===========================================>

// function Factorial(num) {
//   let result = 1;
//   for (let i = num; i >= 1; i--) {
//     result*=i
//   }
//   return result;
// }
// console.log(Factorial(5));

// <======================= Prime Number ===========================================>

// function isPrimeNumber(num) {
//   if (num < 2) {
//     return `${num} is not Prime Number`;
//   }
//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) {
//       return `${num} is not Prime Number`;
//     }
//     return `${num} is Prime Number`;
//   }
// }
// console.log(isPrimeNumber(5)); // True
// console.log(isPrimeNumber(10.896)); // False
// console.log(isPrimeNumber(13)); // True
// console.log(isPrimeNumber(26)); // True

// <======================= Power of Two ===========================================>
// function isPowerOfTwo(num){
//     if(num<1) return false;

//     while(num%2===0){
//         console.log( num=num/2)
//         num=num/2
//     }
//     return num===1
// }
//     console.log(isPowerOfTwo(3))

// <======================= Power of Four ===========================================>

// const isPowerOfFour = function(n) {
//     if(n<1 )return false;
//     while(n%4===0){
//         console.log(n%4)
//         n=n/4;
//     }
//     return n==1

// };

// console.log(isPowerOfFour(45))
// console.log(isPowerOfFour(17))

// <======================= Recursive Fibonacci Sequence ===========================================>
// [0,1,1,2,3,5,8,]

// const RecursionFibonacci = (n) => {
//   if (n < 2) {
//     return n;
//   }
//   console.log(RecursionFibonacci(n - 1))
//   console.log(RecursionFibonacci(n - 2))
//   return RecursionFibonacci(n - 1) + RecursionFibonacci(n - 2);
// };

// console.log(RecursionFibonacci(5));

// <======================= Recursive Factorial  Sequence ===========================================>

function RecursiveFactorial(n) {
  if (n == 0) {
    return 1;
  }
  return n * RecursiveFactorial(n - 1);
}

console.log(RecursiveFactorial(5));

// <======================= Liner Search ===========================================>

function searchByLinerSearch(num) {
  let index = 0;
  const arr1 = [15, 78, 15, 15, 5, 86, 52, 98, 45];
  for (i = 0; i < arr1.length; i++) {
    if (arr1[i] === num) {
      return (index = i);
    }
  }
  return index;
}
console.log(searchByLinerSearch(86));
