/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Enumerate and describe the main datatypes in JavaScript. Try to explain the concepts as you were speaking to a 12 years old.
*/

/* 
    There are 7 main datatypes in JS. 
    *number: number datatype is used to assign numbers on the project. it can be positive and negative. if the number is 
    bigger than 2^53 - 1 or lower than -2^53 + 1 (which is not that common) you can use another datatype called BigInt.
    *BigInt: as mentioned above BigInt is used for the numbers that are bigger than 2^53 - 1 or lower than -2^53 + 1.
    *string: string datatype is used to assign any text using characters no matter meaningful or not. For example all the sentences 
    are strings in the code.
    *boolean: booleans are used to represent two specific conditions that are true and false. one boolean can only be used as true or false.
    those are useful if you want to create specific conditions or evaluate equations.
    *undefined: undefined datatype is used to represent variables that doesn't exist yet. for example you can have a number named number1 
    but you didn't assign a value to it, that makes it undefined.
    *null: since JS is a loose typed language variables can change type over time. and if you want to unassign a value from a variable 
    that you assigned before you can make it null to make it usable again. 
    *symbol: ???
*/

/* EXERCISE 2
 Try to describe what a variable is, in your own words.
*/

/* 
    Variables are things that we use to make our data readable by computer. We can create new variables as we wish, name them, assign values
    to them and use them in our program. Also variables can be assigned by the user of the website visitors using some forms etc. If we don't have 
    variables in our code than there is not that much to do with the data or functions we have.
*/

/* EXERCISE 3
 Write the code to execute an addition (a sum) of the numbers 12 and 20.
*/

    console.log("\n-----------------------Exercise 3---------------------------\n");
    let sum = 12 + 20;
    console.log("Sum of 12 and 20 is equal to: ", sum);

/* EXERCISE 4
 Create a variable named x and assign to it the number 12.
*/

    console.log("\n-----------------------Exercise 4---------------------------\n");
    let x = 12;
    console.log("Variable 'x' is assigned: ", x)

/* EXERCISE 5
 Create a variable called name and assign to it the string "John Doe".
*/

    console.log("\n-----------------------Exercise 5---------------------------\n");
    let name = "John Doe";
    console.log("Name: ", name);

/* EXERCISE 6
 Execute a subtraction between the number 12 and the variable x you declared before (which is storing the value 12).
*/
  
    console.log("\n-----------------------Exercise 6---------------------------\n");
    console.log("Subtraction between the number 12 and the variable x is equal to: ", 12 - x);

/* EXERCISE 7
 Create two variables: name1 and name2. Assign to name1 the string "john", and to name2 the string "John" (this one has a capital J!)
 Verify that name1 is different from name2 (HINT: check their equality to be false).
 Finally, verify that the equality between name1 and name2 becomes true if both are lowercase (without changing the value of name2).
*/

    console.log("\n-----------------------Exercise 7---------------------------\n");

    let name1 = "john";
    let name2 = "John";

    console.log("Name1 Name2 first check: ", (name1) === (name2));
    console.log("If they all were lowercase check: ", (name1) === (name2.toLowerCase()))

/* EXERCISE 8
 Create a variable named A (I changed it because we already have x), and assign to it a numeric value less than 10.
 Write the code to print the literal value of A (ex.: if A is 1, it should print "one", if A is 5 it should print "five" etc.).
*/

    console.log("\n-----------------------Exercise 8---------------------------\n");

    let A = 7; //change it to see the others

    console.log("Using if statement: ")

    if (A===0) {                  //first possible solution using if statement 
        console.log("A -> zero");
    } else if (A===1) {
        console.log("A -> one");
    } else if (A===2) {
        console.log("A -> two");
    } else if (A===3) {
        console.log("A -> three");
    } else if (A===4) {
        console.log("A -> four");
    } else if (A===5) {
        console.log("A -> five");
    } else if (A===6) {
        console.log("A -> six");
    } else if (A===7) {
        console.log("A -> seven");
    } else if (A===8) {
        console.log("A -> eight");
    } else if (A===9) {
        console.log("A -> nine");
    } else if (A===10) {
        console.log("A -> ten");
    }
    
    console.log("\nUsing switch statement: ")

    switch (A) {                    //second possible solution using switch function
        case 0: 
        console.log("A -> zero");
        break;
        case 1: 
        console.log("A -> one");
        break;
        case 2: 
        console.log("A -> two");
        break;
        case 3: 
        console.log("A -> three");
        break;
        case 4: 
        console.log("A -> four");
        break;
        case 5: 
        console.log("A -> five");
        break;
        case 6: 
        console.log("A -> six");
        break;
        case 7: 
        console.log("A -> seven");
        break;
        case 8: 
        console.log("A -> eight");
        break;
        case 9: 
        console.log("A -> nine");
        break;
        case 10: 
        console.log("A -> ten");
        break;
    }

/* EXERCISE 9
 [Extra] Assign a value to a variable using a ternary operator (this topic has not been covered during lesson yet,
 try to search it by yourself, tomorrow morning we'll discuss it together!)
*/

    console.log("\n-----------------------Exercise 9---------------------------\n");

    let currentYear = 2022;
    let lastUseYear = 2024;
    let message;

    (lastUseYear - currentYear) >= 0 ? (message = "You can still use the debit card.") : (message = "You cannot use the debit card anymore."); //ternary operator

    console.log(message);

