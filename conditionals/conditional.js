/*
to check the condition and execute the program
if, if else, nested if, elseif ladder, switch case
*/

// to check if number is positive or negative
let num = Number(prompt("Enter a number: "));
if (num > 0) {
    console.log(`The number ${ num } is positive.`);
} else if(num == 0) {
     console.log(`the number is zero.`); 

} else {
    console.log(`the number ${ num } is negative.`);
}