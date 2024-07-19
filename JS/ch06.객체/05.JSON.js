// JSON - JavaScript Object Notation
// 이기종 컴퓨터간에 데이터를 주고 받는 표준 -XML(eXtensible Markup Language)
// 실제는 json 이 업계 표준(de facto standard)

let name = 'James', age = 27, job = 'programmer';
let person = {name : name, age : age, job : job};
let newPerson = {name, age, job};                 // key 이름과 변수명이 같으면 하나만 사용가능

console.log(person,newPerson);

let externalForm = JSON.stringify(person);
console.log(externalForm);
let internalForm = JSON.parse(externalForm);
console.log(internalForm);

let personArray = [person, {name : 'Maria', age : 25, job : 'designer'}];
console.log(JSON.stringify(personArray));
console.log(personArray);
