/*
* 3항연산자
*/

let dice = Math.ceil(Math.random() * 6);
let result = '';
if (dice % 2 == 0)
  result = '짝수';
else
  result = '홀수';

console.log(`${dice} 은/는 ${result} 입니다.`);

let evenOdd = dice % 2 == 0? '짝수' : '홀수';
console.log(`${dice} 은/는 ${evenOdd} 입니다.`);

let smallBig = dice <=3 ? '작은수' : '큰수';
console.log(`${dice} 은/는 ${smallBig} 입니다.`);

