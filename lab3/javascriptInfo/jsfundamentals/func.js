//task1
function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        // ...
        return confirm('Did parents allow you?');
    }
}
function checkAge(age) {
    if (age > 18) {
        return true;
    }
        return confirm('Did parents allow you?');

} // no differences
//task2

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Did parents allow you?');
  }
}
//v1:
function checkAge(age){
    return (age > 18 ) ? true : confirm("Did parents allow you?");
}
//v2:
function checkAge(age) {
    return (age > 18) || confirm('Did parents allow you?');
}
checkAge(15);
//task3


function min(a,b){
    return a < b ? a : b;

}
min(2,5);
min(3,-1);
min(1,-1);

//task4

function pow(x, n) {
    let result = x;

    for (let i = 1; i < n; i++) {
        result *= x;
    }

    return result;
}

let x = prompt("x?", '');
let n = prompt("n?", '');

if (n < 1) {
    alert(`Power ${n} is not supported, use a positive integer`);
} else {
    alert( pow(x, n) );
}