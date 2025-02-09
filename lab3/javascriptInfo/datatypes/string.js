//task1
/*function ucFirst(str) {
    if (!str) return str;

    return str[0].toUpperCase() + str.slice(1);
}

alert( ucFirst("john") ); // John
//task2
function checkSpam(str) {
    let lowerStr = str.toLowerCase();

    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}

alert( checkSpam('buy ViAgRA now') ); //true
alert( checkSpam('free xxxxx') ); //true
alert( checkSpam("innocent rabbit") ); //false

//task3

truncate("What I'd like to tell on this topic is:", 20) == "What I'd like to te…"

truncate("Hi everyone!", 20) == "Hi everyone!"
function truncate(str, maxlength) {
    return (str.length > maxlength) ?
        str.slice(0, maxlength - 1) + '…' : str;
}
*/
//task4
alert( extractCurrencyValue('$120') === 120 ); // true
function extractCurrencyValue(str) {
    return +str.slice(1);
}