// 백준도장 2884

const alarmHour = 0, alarmMin = 40;
const alarmTime = 45
let newHour, newMin = 0;

if (alarmMin - alarmTime >= 0) {
  newHour = alarmHour;
  newMin = alarmMin - alarmTime;
}
else {
  if (alarmHour == 0) {
    newHour = 24 + alarmHour - 1;
    newMin = alarmMin + (60 - alarmTime);    
  } else {
    newHour = alarmHour - 1 ;  
    newMin = alarmMin + (60 - alarmTime);
  }
}

console.log(`백준이는 ${newHour}시 ${newMin}분에 알람을 맞춰야한다.`);