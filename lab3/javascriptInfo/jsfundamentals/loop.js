//task1
let i = 3;
while(i){
    alert(i--);// 1
}
//task2
let i=0;
while(++i < 5) alert(i); //4
//task3
let i = 0;
while(i++ < 5) alert(i); //5
//task4
for(let i = 0; i< 5; i++) alert(i); //4
//task5
for(let i = 0; i < 5;++i) alert(i); //4
//task6
for(let i=2; i <= 10; i++) alert(i); // 2 3 4 5 6 7 8 9 10
//task7
let i = 0;
while(i<3){
    alert(`number ${i++}`);
}
//task8
let num;
do{
    num = prompt("Enter a number greater than 100?",0);
}while(num <= 100);
//task9
let n = 10;

nextPrime:
    for (let i = 2; i <= n; i++) { // for each i...

        for (let j = 2; j < i; j++) { // look for a divisor..
            if (i % j == 0) continue nextPrime; // not a prime, go next i
        }

        alert( i ); // a prime
    }