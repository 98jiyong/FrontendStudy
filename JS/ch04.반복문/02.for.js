let summerFruits = ['수박', '참외', '복숭아', '포도']

for (let i = 0; i < 4; i++) {
  console.log(i, summerFruits[i]);
}

for (let i = 0; i < summerFruits.length; i++) {
  console.log(i, summerFruits[i]);  
}

let j = 0;
for (let i = 1; i <= 100; i++) {
  j += i;
}
console.log(`1에서 100사이의 정수의 합 = ${j}`);

let sumOdd = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 2 == 1) {
    sumOdd += i;
  }
}
console.log(`1에서 100까지 홀수의 합 = ${sumOdd}`);

let sumEven = 0;
for (let i = 0; i <= 100; i+=2 ) {
  sumEven += i;
}
console.log(`1에서 100까지 짝수의 합 = ${sumEven}`);

let three = 0;
for (let i = 3; i < 100; i+= 3) {
  three += i;
}
console.log(`1에서 100까지 3의배수들의 합 = ${three}`);
let five = 0;
for (let i = 200; i >= 100; i -= 5) {
  five += i;
}
console.log(`200에서 100까지 5의배수들의 합 = ${five}`);

let sumMinute = 0;
for (let hour = 0; hour < 24; hour++) {
  for (let minute = 0; minute < 60; minute++) {
    sumMinute++;
  }
}
console.log(sumMinute);