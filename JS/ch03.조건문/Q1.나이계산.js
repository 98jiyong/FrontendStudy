// 생년월일에 따른 나이 계산

const bYear = 1991, bMonth = 12, bDay = 5;
const today = new Date()

let tYear = today.getFullYear();
let tMonth = today.getMonth() + 1;
let tDay = today.getDate();

let age = 0;

if (bMonth == tMonth){
  if (bDay <= tDay){
    age = tYear - bYear;
  }
  else
    age = tYear - bYear - 1;
}
else if (bMonth > tMonth) {
  age = tYear - bYear - 1;
}
else
  age = tYear - bYear;

console.log(`생일 : ${bYear}-${bMonth}-${bDay}, 나이 : ${age}`);