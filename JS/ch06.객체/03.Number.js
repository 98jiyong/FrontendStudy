// 표준 내장 객체 - Number
let num = 273;
let numberFromConstructor = new Number(273);
console.log(num, numberFromConstructor);

const pi = Math.PI;
console.log(pi);
console.log(pi.toFixed(5));               // 3.14159 소수점 이하 5자리까지 보여줌, 반올림
console.log(pi.toExponential());          // 3.141592653589793e+0
console.log(pi.toPrecision(3));           // 3.14, 유효숫자 3

console.log(Number.MAX_VALUE, Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER);
console.log(Math.pow(2, 53) - 1);
console.log(Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);

// NaN (Not a Number)
let a = parseInt('string');
console.log(Number.isNaN(a));