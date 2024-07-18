// 나이계산

function getAge(year, month, day){
  let date = new Date();
  let tYear = date.getFullYear();
  let tMonth = date.getMonth() + 1;
  let tDay = date.getDate();
  let age = 0;

  if(month == tMonth){
    if(day <= tDay){
      age = tYear - year;
    }
    else{
      age = tYear - year - 1;
    }
  }
  else if(month < tMonth){
    age = tYear - year;
  }
  else{
    age = tYear - year - 1;
  }
  return age;
}

console.log(getAge(1998, 8, 14));