// 사분면 고르기

let x = Math.ceil(Math.random() * 20);
let y = Math.ceil(Math.random() * 20);
let result = '';
x *= Math.random() > 0.5? 1: -1;
y *= Math.random() > 0.5? 1: -1;


if (x > 0 && y > 0) {
  result = '1';
}
else if (x < 0 && y > 0) {
  result = '2';
}
else if (x < 0 && y < 0) {
  result = '3';
}
else if (x > 0 && y < 0) {
  result = '4';
}
else
  result = '좌표축';
console.log(`${x}, ${y} -> 제${result}사분면`);

