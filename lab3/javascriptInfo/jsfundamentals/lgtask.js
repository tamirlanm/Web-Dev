alert(null || 2 || undefined); // 2
alert(alert(1) || 2 || alert(3)); // 1, 2
alert(1 && null && 2); // null
alert(alert(1) && alert(2)); //1, undefined
alert(null || 2 && 3 || 4); // 3
//check the range between
//if(age >=14 && age<=90)
//check the range outside
//v1: if(!(age >=14 && age<=90)
//v2: if(age<14 || age>90)
if(-1 || 0) alert('first'); //truth
if(-1 && 0) alert('second'); //false
if(null || -1 && 1) alert('third'); //truth


