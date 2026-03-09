// const arr1 = [15, 86, 14, 78, -6, 35, -62, -78, 25, 36, 78, 24, 31, -36];

// function bubbleSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr1[i] > arr1[i + 1]) {
//       let temp = arr1[i];
//       arr1[i] = arr1[i + 1];
//       arr1[i + 1] = temp;
//     }
//   }
// }

// console.log(bubbleSort(arr1));

const arr1 = [15, -89, 12, 70, -6, -98, 23, -74, 21, -32];

function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 + 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

console.log(bubbleSort(arr1));
