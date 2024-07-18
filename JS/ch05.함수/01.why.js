let num = 13;
// for (let i = 2; i <= num; i++){
//   if (num % i == 0)
//     console.log(`${num} 은/는 소수가 아님.`);
//     break;
// }

function isPrimeNumber(num) {
  for (let i =2; i < num; i++){
    if (num % i == 0)
      return false;
  }
  return true;
}

// 2에서부터 20까지의 소수
console.log(12, isPrimeNumber(12));
console.log(13, isPrimeNumber(13));
let isPrimeNumbers = [];
for (let  i=2; i<=100; i++){
  if(isPrimeNumber(i)){
    isPrimeNumbers.push(i);
  }
}
console.log(isPrimeNumbers);