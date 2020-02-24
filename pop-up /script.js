var weekdayHour = Math.floor(Math.random() * 40);

var weekendHour = Math.floor(Math.random() * 20);
var otHours = Math.floor(Math.random() * 25);
var weekDayAndWeekend = weekdayHour + weekendHour;
var weekDayAndOT = weekdayHour + otHours;

var weekdayPay =  weekdayHour * 35;
var otPay = otHours * 1.5;
var weekendPay = weekendHour * 2.0;

if (weekdayHour <= 40 && weekdayHour > 20) {
    alert('I work at regular Hours is:'+ weekdayHour+ ' and net play is: '+weekdayPay);
} else if (weekdayHour === 40 && weekendHour <=20 && otHours === 0) {
    alert('I work regular hours and weekend: ' + weekDayAndWeekend + 'and net play is: '+(weekdayPay+weekendPay));
}else if (weekdayHour === 40 && weekendHour === 0 && otHours <= 25) {
    alert('I work on regular hours and OT ' +weekDayAndOT+ ' to get double and my net pay is: '+ (weekdayPay+otPay));
} else if (weekdayHour<= 20) {
    alert('I work only weekend hours: '+ weekendHour + ' and get pay: ' + weekendPay);
} else 
    alert('I do nothing!');
