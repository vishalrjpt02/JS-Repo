let score = "33abc"

//console.log(typeof score)
//console.log(typeof(score))

let valueInNumber =Number(score)
//console.log(typeof score)
//console.log(valueInNumber) //NAN coz it has abc with number

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn = 1
let booleanIsLoggedIN = Boolean (isLoggedIn)
//console.log(booleanIsLoggedIN)

let someNumber = 33
let stringNumber = String(someNumber)
// console.log(stringNumber)
// console.log(typeof stringNumber)

//**************************Oprations**************************************************
let val =3
let negVal = -val
//console.log(negVal)

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**2) // 2 to the power 2
// console.log(2/2)

let str1 ="vishal"
let str2 ="vishal"

//console.log( (3 + 4) * 5 % 3);

// console.log(true); //true
// console.log(+true);  //1
// console.log(+"");  //1 coz empty string is treated as a 0


let str3 = str1 + str2
 //console.log(str3);

// console.log("1" + 2); //12
// console.log(1 + "2");   // 12
// console.log("1" + 2 + 2);   //122 String has higest preceedence while concatination
// console.log(1 + 2 + "2");    // 32 if string is at-last then number will be trated as integer


// console.log( 3 + 4 * 5 % 3); not prefered as a developer


let num1, num2, num3

num1 = num2 = num3 = 2 + 2 //not prefered 

let gameCounter = 100 
++gameCounter;
console.log(gameCounter); //101 there are two things here prefix and postfix incr/decr


// link to study prefix and postfix
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion