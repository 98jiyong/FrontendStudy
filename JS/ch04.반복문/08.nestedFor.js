// 중첩(nested) for 반복문

// 1. 별 다섯개를 다섯줄 그리기
for (let i = 0; i < 5; i++){
  let line = '';
  for(let k = 0; k < i + 1; k++){
    line += "* ";
  }
  console.log(line);
}

for (let i = 5; i > 0; i--){
  let line = '';
  for(let k = 0; k < i ; k++){
    line += "* ";
  }
  console.log(line);
}

// 5. 주사위 눈으로 6 X 6 배열 만들기

let diceArray = [];
for (let i = 0; i < 6; i++){
  let line = [];
  for (let k = 0; k < 6; k++){
    line.push(Math.ceil(Math.random() * 6));
  }
  diceArray.push(line)
}
console.log(diceArray);

// 6. 구구단
for (let i = 1; i < 10; i++){
  for (let j = 1; j <10; j++){
    sum = i * j;
    console.log(`${i} X ${j} = ${sum}`);
  }
  console.log();
}

// 다이아몬드 만들기
for (let i = 1; i < 10; i++){
  let line = '';
  for (let j = 0; j < 9 - i; j++){
    line += ' ';
  }
  for (let k = 0; k < (2 * i - 1); k++){
    line += '*'; 
  }
  for (let l = 0; l < 9 - i; l++){
    line += ' ';
  }
  console.log(line);
}
for (let i = 8; i > 0 ; i--){
  let line = '';
  for (let j = 0; j < 9 - i; j++){
    line += ' ';
  }
  for (let k = 0; k < (2 * i - 1); k++){
    line += '*'; 
  }
  for (let l = 0; l < 9 - i; l++){
    line += ' ';
  }
  console.log(line);
  }

