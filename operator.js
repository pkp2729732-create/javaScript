// operator--> symbols to perform task + - * / % $
// A+B=AB
// type of operators 

// unary operator --> works with single operand
// example --> typeof, delete, ++, --, +, -

// binary operator --> works with two operand
//  arthmetic operators --> + - * ** / % ++ --
// assignment operators --> = += -= *= /= %=
// comparison operators --> == === != !== > < >= <=
// logical operators --> && || !  
// bitwise operators --> & | ^ ~ << >> >>>

// ternary operator --> works with three operand 
// condition ? expr1 : expr2

// let num = 5;
// let res=(num==10)?"true":"false";
// let res=num==10?"true":"false";
// console.log(res);
// console.log(a>=5?"true":"false");



// let mark=85;
// let res=(mark>=50)?"pass":"fail";
// console.log("The student has",res);


// var a = 5;
// var b = 10;
// console.log("Sum:", a + b);

// let a=15;
// let b=25;
// console.log("Sum with let:"+ (a + b));

// let res= a + b;
// console.log("The res is", a + b);

// let uo = 20;
// console.log("Value of uo:", uo++);
// console.log("Value of uo after post-increment:", uo);
// value = ++uo;
// console.log("Value after pre-increment:", value);

// let age = 30;
// console.log(age>=18 && age<=65);

// let x = 0;
// console.log(!x);



// marksheet in ternory operator
//let marks = prompt("Enter your marks:");
// const maxMarks = 100;
// const minPassMarks = 30;
// let result = (marks >= 0 && marks <= maxMarks) ?
//     (marks >= minPassMarks40 ? "Pass" : "Fail") :
//     "Invalid marks entered.";
//console.log("Result:", result);

let marks = Number (prompt("Enter your marks:"));
let result = (marks >= 30 && marks <= 50) ? "grade d" :
(marks >= 50 && marks <=  70) ? "grade c" :
(marks >= 70 && marks <= 90) ? "grade b" :
(marks >= 90 && marks <= 100) ? "grade a" : "fail"
console.log("The student has", result);