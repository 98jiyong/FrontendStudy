// 주사위 3개 문제
// 같은 눈이 3개가 나오면 10,000원+(같은 눈)×1,000원의 상금을 받게 된다.
// 같은 눈이 2개만 나오는 경우에는 1,000원+(같은 눈)×100원의 상금을 받게 된다.
// 모두 다른 눈이 나오는 경우에는 (그 중 가장 큰 눈)×100원의 상금을 받게 된다.

let d1 = Math.ceil(Math.random() * 6);
let d2 = Math.ceil(Math.random() * 6);
let d3 = Math.ceil(Math.random() * 6);
let money = 0;

if (d1 == d2 && d1 == d3)
  money = 10000 + (d1 * 1000);
else if (d1 == d2 || d2 == d3 || d1 == d3){
  if (d1 == d2)
    money = 1000 + (d1 * 100);
  else if (d2 == d3)
    money = 1000 + (d2 * 100);
  else if (d3 == d1)
    money = 1000 + (d3 * 100);
}
else{
  if(d1 > d2 && d1 > d3)
    money = d1 * 100;
  else if(d2 > d1 && d2 >d3)
    money = d2 * 100;
  else if(d3 > d1 && d3 > d2)
    money = d3 * 100;
}

console.log(d1, d2, d3, '==>', money);

// Refactoring

if (d1 == d2 && d1 == d3)
  money = 10000 + (d1 * 1000);
else if (d1 == d2 || d2 == d3 || d1 == d3){
  if (d1 == d2 || d1 == d3)
    money = 1000 + (d1 * 100);
  else if (d2 == d3)
    money = 1000 + (d2 * 100);
}
else{
  let maxD = Math.max(d1, d2, d3);
  money = 100 * maxD;
}


console.log(d1, d2, d3, '==>', money);
