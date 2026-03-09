// function Rohit(){
//     return Manjit()
// }
// function Manjit(){
//     return Rajan()
// }
// function Rajan(){
//     return Ram()
// }
// function Ram(){
//     return true
// }

// console.log(Rohit())

// function GotoLunch(person){
//     console.log(person)
//     if (person ===5 )return true;
//     return GotoLunch(person+1)
// }
// console.log(GotoLunch(1))

// <<<<<<<<<<<<<< Mutipling an array by Loop >>>>>>>>>>>>>>>>>>>>>

const num = [1, 2, 3, 4, 5];

// function mutipleAnArrayByLoop(arr) {
//   let result = 1;
//   for (let i = 0; i < arr.length; i++) {
//     result *= arr[i];
//   }
//   return result;
// }

// console.log(mutipleAnArrayByLoop(num));

// <<<<<<<<<<<<<< Mutipling an array by Recursion >>>>>>>>>>>>>>>>>>>>>

function mutipleAnArrayByRecursion(arr) {
  if (arr.length <= 0) {
    return 1;
  }
  return (
    arr[arr.length - 1] *
    mutipleAnArrayByRecursion(arr.slice(0, arr.length - 1))
  );
}
console.log(mutipleAnArrayByRecursion(num));
