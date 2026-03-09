const arr = [-5, 2, 10, 4, 6];

function linearSearchResult(num) {
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return i;
    }
  }
  return -1;
}

console.log(linearSearchResult(10));
console.log(linearSearchResult(6));
console.log(linearSearchResult(20));
