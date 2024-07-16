// 여러개 값중에 하나를 선택
let score = Math.ceil(Math.random() * 60) + 40;     // 51 ~ 100 사이의 정수
let grade = '';

switch (parseInt(score / 10)) {     // score 값은 5, 6, 7, 8, 9,10
  case 10:
  case 9:
    grade = 'A';
    break;
  case 8:
    grade = 'B';
    break;
  case 7:
    grade = 'C';
    break;
  case 6:
    grade = 'D';
    break;
  default:
    grade = 'F';
}

// 789 = + / 3456 = 0 / 012 = -

let sign = '';
if (score == 100){
  grade = 'A';
  sign = '+';
}
else if (grade !== 'F'){
  switch (score % 10) {
    case 9:
    case 8:
    case 7:
      sign = '+';
      break;
    case 6:
    case 5:
    case 4:
    case 3:
      sign = '0';
      break;
    case 2:
    case 1:
    case 0:
      sign = '-'
      break;  
    default:
  }
}
console.log(`점수 : ${score}, 학점 : ${grade}${sign}`);