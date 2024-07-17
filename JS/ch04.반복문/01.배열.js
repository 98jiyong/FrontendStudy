// 배열(Array)

let summerFruits = ['수박', '참외', '복숭아', '포도']
console.log(summerFruits[0]);
console.log(typeof summerFruits);

// 인덱싱
console.log(summerFruits[0], summerFruits[1], summerFruits[2], summerFruits[3]);
console.log(summerFruits.length);
console.log(summerFruits[summerFruits.length - 1]);       // 맨 마지막 요소는 length-1

// 배열에 임의의 타입의 원소를 사용할 수 있음
let person = ['James', 27, '남자', '프로그래머', 175.3, ['수박', '포도']];
console.log(person);
let personObj = {
  name: 'James', age: 27, gender: 'male', job: 'programmer',
  height: 175.3, favoriteFruits: ['watermelon', 'grape']
}
console.log(personObj);


// 배열 요소 추가
summerFruits.push('자두');
console.log(summerFruits);

// 배열 요소 제거
summerFruits.splice(2,1);     // 인덱스가 2인 원소부터 1개를 제거
console.log(summerFruits);
