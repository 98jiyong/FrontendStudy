// 

let arr1 = [1, 2, 3, 4];
let arr2 = [5, 6, 7, 8];
// a^2 + b^2 + c^2 + d^2
function sumOfSquare(arr){
  let sum = 0;
  for (let num of arr) {
    sum += num ** 2;
  }
  return sum;
}
console.log(sumOfSquare(arr1));

// (a + b + c + d)^2
function squareOfSum(arr){
  let sum = 0;
  for (let num of arr){
    sum += num;
  }
  return sum * sum ;
}
console.log(squareOfSum(arr1));

let variance = sumOfSquare(arr) / arr.length - squareOfSum(arr) / arr.length ** 2;
console.log(variance);