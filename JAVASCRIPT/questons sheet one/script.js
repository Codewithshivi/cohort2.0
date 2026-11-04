
// Level 1 – Pure Beginner Practice

// 1. print numbers from 1 to 10

// for(let i=1; i<11; i++){
//     console.log(i);
// }

// 2. print only even numbers from 1 to 20 use a loop & conditions

// for(let i=1; i<21; i++){
//     if(i%2===0) console.log(i);
// }

// 3. print numbers from 10 to 1 reverse loop with a decrement

// for(let i=10; i>0; i--){
//     console.log(i);
// }

// 4. print the word "yes" 5 times repeat using loop 

// for(let i=1; i<6; i++){
//     console.log("Yes");
// }

// 5. print whether numbers from 1 to 10 are even or odd for each numbers check even "Even" else odd "Odd"

// for(let i=1; i<11; i++){
//     if(i%2===0) console.log(` ${i} is even`);
//     else console.log(` ${i} is Odd`);
// }

// 6. ask user for a number and say if it's positive or negative 

// let num= prompt("Enter your number");
// if(num===null) console.error("You cancelled it");
// else if(num.trim()=== "") console.error("please write something");
// else{
//     num = Number(num);
//     if(isNaN(num)) console.error("Enter a valid number");
//     else if(!Number.isInteger(num)) console.error("please write only whole numbers");
//     else console.log(num>=0 ? "Your number is positive" : "Your number is negative");
// }



// 7. Ask user’s age and check if eligible to vote
// If age >= 18 → “Eligible”, else → “Not eligible”

// let age = prompt("Enter your current age");
// if(age===null) console.error("You cancelled it");
// else if(age.trim()==="") console.error("Please write something...");
// else{
//     age= Number(age);
//     if(isNaN(age)) console.error("please enter a valid age");
//     else if(!Number.isInteger(age)) console.error("please enter a only whole number");
//     else if(age<0 || age>110) console.error("This is not a valid age");
//     else if(age>=18 && age<=110) console.log("You are eligible for vote");
//     else console.log("You are not eligible for vote");  
// }



// 8. Print multiplication table of 5
// Use loop to print 5 × 1 to 5 × 10.

// for(let i=1; i<11; i++){
//     console.log(`5 * ${i} = ${5*i}`);
// }

// 9. Count how many numbers between 1 and 15 are greater than 8
// Loop and count conditionally.

// let counter =0;
// for(let i=1; i<16; i++){
//     if(i>8){
//     console.log(i);
//     counter++;
// }
// }
// console.log(`Total count is ${counter}`);


// 10. Ask user for password and print access status
// Hardcoded correct password. Compare with user input.

// let password = "savita123";
// let pass = prompt("Enter your correct password");
// if(pass===null) console.error("You cancelled it");
// else if(pass.trim()==="") console.error("please write something");
// else if(pass===password) console.log("Access your account");
// else console.log("Deny your account");






// Level 2 – Slightly Tougher but Logical

// 11. Allow only 3 attempts to enter correct password
// If user gets it right early, stop. If not → “Account locked”

// let password = "savita123";
// let flag =false;
// let attempts =0;
// let pass = prompt("Enter your correct password");
// attempts++;
// if(pass===password) flag=true;
// while(pass!==password){
//     if(attempts===3){
//         console.error("Your account is locked");
//         break;
//     }
//      pass = prompt("Enter your correct password");
// if(pass===password) flag=true;
// attempts++;
// }
// if(flag===true) console.log("Access your account");


// let attempts = 0;
// let password = "savita123";
// let pass = prompt("Enter your password");
// attempts++;
// while(attempts<3 && pass!==password){
//     pass = prompt("Enter your password");
// attempts++;
// }
// if(attempts===3 && pass!==password) console.error("Your account is locked");
// else console.log("Access your account");




// 12. Ask user for words until they type “stop”. Count how many times they typed “yes”
// Loop until "stop" is typed. Count "yes".
// let counter =0;
// let word = prompt("Enter your word");
// while(word!=="stop"){
//     console.log(word);
//     if(word==="yes") counter++;
//     word = prompt("Enter your word");
// }

// console.log(`total times yes count is = ${counter}`);


// 13. Print numbers divisible by 7 from 1 to 50
// Use modulo % and loop.

// for(let i=1; i<51; i++){
//     if(i%7===0) console.log(i);
// }


// 14. Sum of all odd numbers from 1 to 30
// Add only odd numbers. Print final sum.

// let sum =0;
// for(let i=1; i<31; i++){
//     if(i%2===1) console.log(i);
//     sum = sum + i;
// }
// console.log(`Total sum of odd numbers = ${sum}`);


// 15. Keep asking number until user enters an even number
// Use while loop. Stop only if input is even.

// let num = +prompt("Enter your number");
// while(num%2!==0){
//     num = +prompt("Enter your number");
//     console.log(`Your even is ${num}`);
// }



// 16. Print numbers between two user inputs
// Input start and end using prompt() → print all between.

// let start = +prompt("Enter your first number");
// let end = +prompt("Enter your last number");

// if(start>end) console.error("start can not be bigger than end");
// for(let i=start; i<=end; i++){
//     console.log(i);
// }



// 17. Print only first 3 odd numbers from 1 to 20
// Use loop. Stop with break after 3 odd prints.

// let counter =0;
// for(let i=1; i<21; i++){
//     if(counter===3) break;
//     if(i%2===1){
//         console.log(i);
//         counter++;
//     }
// }



// 18. Ask user 5 numbers. Count how many are positive
// Use loop + condition + counter.
// let counter =0;
// for(let i=1; i<6; i++){
//     let num = +prompt("Enter your number");
//     console.log(num);
//     if(num>=0) counter++; 
// }
// console.log(`Total positive numbers = ${counter}`);


// 19. ATM Simulator – Allow 3 withdrawals
// Start with ₹1000 balance. Ask withdrawal amount 3 times.
// If enough balance → deduct
// Else → print “Insufficient balance”

let balance = 2000;
let flag = false;
let attempts = 0;

while(balance>=0 && attempts!==3){
    let withdraw = +prompt("Enter your amount");
    attempts++;
    if(balance>=withdraw) balance-=withdraw;
    else{
        flag=true;
        break;
    }
}
if(flag===true) console.error("Insufficient balance");
else console.log(` Your current balance = ${ balance}`);

