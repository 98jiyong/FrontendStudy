// break - 반복문 탈출

// 04.while.js에 있는 방법보다 아래 방법이 더 많이 쓰임

let sumDice = 0;
let diceArray=[];
while (true) {                //  == for (;;)
  let dice = Math.ceil(Math.random() * 6);
  diceArray.push(dice);
  sumDice += dice;
  if(sumDice > 21)
    break;
}
console.log(diceArray);
console.log(sumDice);

// break는 loop의 한단계만 벗어날 수 있음
for (let i = 0; i < 3; i++){
  for (let j = 0; j < 5; j++){
    if(j == i)
      break;
  }
    console.log('point A', i);
}
console.log('point B');
