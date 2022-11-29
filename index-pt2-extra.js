// Additional assignments for Day 6

/*EX 1
 Use a ternary operator to assign to a variable called gender the string values "male" or "female".
 The choice should be made based on the value of another variable called isMale.
*/

console.log("\n-----------------------Exercise 1---------------------------\n");

let isMale = false;
let gender = isMale ? "male" : "female";
console.log("Gender is: ", gender)

/*EX 2
 Write a piece of code for checking if, given two integers, the value of one of them is 8 or if their addition or subtraction is equal to 8.
*/

console.log("\n-----------------------Exercise 2---------------------------\n");

let number1 = 8;
let number2 = 10;

let isEqual = ((number1 === 8) || (number2 === 8));
console.log("One of the integers is equal to 8:", isEqual);

let isSumEqual = ((number1 + number2) === 8);
console.log("The addition of the integers is equal to 8:", isSumEqual);

let isSubEqual = ((number1 - number2) === 8) || ((number2 - number1) === 8);
console.log("The subtraction of the integers is equal to 8:", isSubEqual);

/*EX 3
 Create a variable and assign to it the concatenation of two strings.
*/

console.log("\n-----------------------Exercise 3---------------------------\n");

let string1 = "Muhammed Yasir ";
let string2 = "Ozdemir";

let fullName = string1 + string2;

console.log(fullName);

/*EX 4
 Create three variables and assign a numerical value to each one of them. 
 Using a conditional statement, write a piece of code for sorting their values from highest to lowest.
 Display the result in the console.
*/

console.log("\n-----------------------Exercise 4---------------------------\n");

let number4 = 32;
let number5 = 23;
let number6 = 21;

if ((number4 > number5) && (number4 > number6)) 
{
    if (number5 > number6) 
    {
        console.log(number4, " > ", number5, " > ", number6)
    } else {
        console.log(number4, " > ", number6, " > ", number5)
    }
}

else if ((number5 > number4) && (number5 > number6)) 
{
    if (number4 > number6)
    {
        console.log(number5, " > ", number4, " > ", number6)
    } else {
        console.log(number5, " > ", number6, " > ", number4)
    }
}

else if ((number6 > number4) && (number6 > number5)) 
{
    if (number4 > number5) 
    {
        console.log(number6, " > ", number4, " > ", number5)
    } else {
        console.log(number6, " > ", number5, " > ", number4)
    }
}

/*EX 5
 Write a piece of code for finding the average of two given integers.
*/

console.log("\n-----------------------Exercise 5---------------------------\n");

let number7 = 83124;
let number8 = 12409;

let average = (number7  + number8) / 2;

console.log("Average value of ", number7   , " and ", number8, " is ", average);

/*EX 6
 Write a piece of code for finding the longest of two given strings.
*/

console.log("\n-----------------------Exercise 6---------------------------\n");

let string3 = "Hello, my name is Muhammed Yasir Ozdemir."
let string3Length = string3.length;
console.log("String 3: ", string3, "String 3 length: ", string3Length, "\n");

let string4 = "I'm a student at EPICODE, learning how to code."
let string4Length = string4.length;
console.log("String 4: ", string4, "String 4 length: ", string4Length, "\n");

if (string3Length > string4Length) {
    console.log("The longest string is 'String3'.");
} else if (string4Length > string3Length) {
    console.log("The longest string is 'String4'.");
}

/*EX 7
 Write a piece of code for checking if a given value is a integer or not.
*/

console.log("\n-----------------------Exercise 7---------------------------\n");

let number9 = 17.2;
let isInteger = number9 % 1 === 0;

if (isInteger) 
{
    console.log("Number 9 is: ", number9, " and it's an integer.")
} else {
    console.log("Number 9 is: ", number9, " and it's not an integer.")
}


/*EX 8
 Write a piece of code for calculating a certain percentage of a given number.
 (Ex.: the 20% of 400 is 80)
*/

console.log("\n-----------------------Exercise 8---------------------------\n");

let number11 = 950;

let percent20 = number11 * 0.30;

console.log("The 30% of 900 is: ", percent20);

/*EX 9
 Write a piece of code for checking if a given number is even or odd.
*/

console.log("\n-----------------------Exercise 9---------------------------\n");

let number12 = 43;

let isEven = ((number12 % 2) === 0);

if (isEven) {
    console.log("Number 12 is: ", number12, " and it is even.")
} else {
    console.log("Number 12 is: ", number12, " and it is odd.")
}
