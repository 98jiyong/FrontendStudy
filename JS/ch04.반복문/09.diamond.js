// 다이아몬드 만들기
for (let i = 1; i < 10; i++){
  let line = '';
  for (let j = 0; j < 9 - i; j++){
    line += ' ';
  }
  for (let k = 0; k < (2 * i - 1); k++){
    line += '*'; 
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
  console.log(line);
  }

//  다른방법
let N = 4;      // 가운데 두꺼운 별이 9개
for (let i = 0; i <= N; i++) {
    let line = '';
    for (let k = 0; k < N - i; k++) 
        line += ' ';
    for (let k = 0; k < 2 * i + 1; k++)
        line += '*';
    console.log(line);
}
for (let i = N - 1; i >= 0; i--) {
    let line = '';
    for (let k = 0; k < N - i; k++) 
        line += ' ';
    for (let k = 0; k < 2 * i + 1; k++)
        line += '*';
    console.log(line);
}