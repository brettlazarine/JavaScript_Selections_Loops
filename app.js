// Ignore Even
console.log("Ignore Even");
for (let i = 1; i <= 100; i++){
    if (i % 2 == 0){
        continue;
    }
    console.log(i);
}
console.log("**********");
// FizzBuzz
console.log("FIZZBUZZ");
for (let i = 1; i <= 100; i++){
    if (i % 3 == 0 && i % 5 == 0){
        console.log("FIZZBUZZ");
    } else if (i % 3 == 0){
        console.log("FIZZ");
    } else if (i % 5 == 0){
        console.log("BUZZ");
    } else {
        console.log(i);
    }
}
console.log("**********");
// While and Do/While
// While 1
console.log("While 1");
let i = 1;
while (i <= 100){
    if (i % 2 != 0){
        console.log(i);
    }
    i++;
}
console.log("**********");
// While 2
console.log("While 2");
i = 1;
while (i <= 100){
    if (i % 3 == 0 && i % 5 == 0){
        console.log("FIZZBUZZ");
    } else if (i % 3 == 0){
        console.log("FIZZ");
    } else if (i % 5 == 0){
        console.log("BUZZ");
    } else {
        console.log(i);
    }
    i++;
}
console.log("**********");
// Do 1
console.log("Do 1");
i = 1;
do {
    if (i % 2 != 0){
        console.log(i);
    }
    i++;
} while (i <= 100);
console.log("**********");
// Do 2
console.log("Do 2");
i = 1;
do {
    if (i % 3 == 0 && i % 5 == 0){
        console.log("FIZZBUZZ");
    } else if (i % 3 == 0){
        console.log("FIZZ");
    } else if (i % 5 == 0){
        console.log("BUZZ");
    } else {
        console.log(i);
    }
    i++;
} while (i <= 100);
console.log("**********");
// Find Value
console.log("Find Value");
let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500
console.log(`Value = ${value}, N = ${n}`)
let boolControl = false;
while (!boolControl){
    for (let i = 0; i <= n; i++){
        if (i == value){
            console.log("Found value!");
            boolControl = true;
            break;
        }
    }
    if (!boolControl){
        console.log("Did not find value.");
        boolControl = true;
    }
}
console.log("**********");
// FIZZBUZZ 2.0
console.log("FIZZBUZZ 2.0");
let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let n2 = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);
console.log(`Start: ${start}, N: ${n2}, FIZZ: ${fizzDivisor}, BUZZ: ${buzzDivisor}`)
for (; start <= n2; start++){
    if (start % fizzDivisor == 0 && start % buzzDivisor == 0){
        console.log("FIZZBUZZ");
    } else if (start % fizzDivisor == 0){
        console.log("FIZZ");
    } else if (start % buzzDivisor == 0){
        console.log("BUZZ");
    } else {
        console.log(start);
    }
}