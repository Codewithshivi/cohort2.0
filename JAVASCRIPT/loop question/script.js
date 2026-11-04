// question:-1  print numbers from 1 to 10 

// for(let i=1; i<11; i++){
//     console.log(i); 
// }


// question:-2  print only even numbers from 1 to 50 using a loop & conditions to print only even ones

// for(let i=1; i<51; i++){
//     if(i%2===0) console.log(i);
// }

// for(let i=2; i<50; i+=2){
//     console.log(i);
// }


// question:-3  print numbers from 10 to 1 reverse loop with a decrement

// for(let i=10; i>0; i--){
//     console.log(i);
// }


// question:-4  print only even numbers from 20 to 1 reverse loop with a decrement

// for(let i=20; i>0; i-=2){
//     console.log(i);
// }



// question:-5  print the word "yes" 5 times repeat using loop

// for(let i=1; i<6; i++){
//     console.log("Yes");
// }


// question:-6  print whether numbers form 1 to 20 are even or odd for each numbers check even "Even" odd "odd"

// for(let i=1; i<20; i++){
//     if(i%2===0) console.log(`${i} is Even`);
//     else console.log(`${i} is Odd`);  
// }

// question:-7   Ask user for a number and say if it's positive or negative 

// let num = prompt("Enter your number");
// if(num===null) console.error("You cancelled it");
// else if(num.trim() ==="") console.error("Please write something...");
// else{
//     num = Number(num);
//     if(isNaN(num)) console.error("Enter a valid number");
//     else if(num>=0) console.log("Your number is positive");
//     else console.log("Your number is negative"); 
// }




// question:-8  Ask user's age and check if eligible to vote if age>=18 "Eligible" else "Not eligible"

// let age = prompt("Enter your current age");
// if(age===null) console.error("You cancelled it");
// else if(age.trim()==="") console.error("Please write something...");
// else{
//     age = Number(age);
//     if(isNaN(age)) console.error("Write properly");
//     else if(age<0) console.error("This is not valid age");
//     else if(age>110) console.error("This is not valid age");
//     else if(age>=18 && age<=110) console.log("You can vote");
//     else console.log("You can't vote");  
// }

// let age = prompt("Enter your current age");
// if(age===null) console.error("You cancelled it");
// else if(age.trim()==="" || isNaN(age)) console.error("Write properly");
// else if(age<0 || age>110) console.error("This is not valid age");
// else console.log(age>=18 ? "Eligible" : "Not eligible");




// question:-9  print multiplication table of 5 use loop to print 5*1=5 to 5*10=50

// for(let i=1; i<11; i++){
//     console.log(`5 * ${i} = ${5*i}`);
// }



// question:-10  count how many numbers between 1 and 15 are greater than 8 loop and count condition


// let count = 0;
// for(let i=1; i<16; i++){
//     if(i>8) {
//         count++;
//         console.log(i);
//     }
// }

// console.log(`Total count is ${count}`);



// question:-11  count how many numbers between 1 and 100 are greater than 22 and less than 77 loop and count condition

// let count = 0;
// for(let i=1; i<101; i++){
//     if(i>22 && i<77) {
//         count++;
//         console.log(i); 
//     }
// }

// console.log(`Total count is ${count}`);




// question:-12 Ask user for password and print access status hardcoded correct password compare with user input

// const password = "shivika123";
// const pass = prompt("Enter your correct password");
// if(pass===null) console.error("You cancelled it");
// else if(pass.trim()==="") console.error("write something");
// else console.log(pass===password ? "Access granted" : "Access denied");



// question:-13 Alow only 3 attempts to enter correct password if user get's it right early stop. if not "Account locked".
// first way to solve this question 
// let attempts = 0;
// let flag = false;
// let password = "savita123";
// let attempts= 0;
// let pass = prompt("Enter your correct password");
// attempts++;
// if(pass === password) flag = true;
// while(pass!==password){
//     if(attempts===3){
//         console.error("Your account is locked");
//         break;
//     }
//     pass = prompt("Enter your correct password");
//     if(pass===password) flag = true;
// attempts++;
// }
// if(flag===true) console.log("Access your account");

// second way to solve this question 

// let attempts = 0;
// let shipassword = "savita123";
// let password = prompt("Enter your password");
// attempts++;
// while(attempts<3 && shipassword!==password){
//      password = prompt("Enter your password");
// attempts++;
// }
// if(attempts===3 && shipassword!==password) console.error("Your account is locked");
// else console.log("Access your account");




// question:-14 Ask user for words until they type "stop" count how many times they typed "yes" loop until "stop" is typed count "yes"

// let counter = 0;
// let word = prompt("Enter your word");

// while(word!=="stop"){
//     console.log(word);
//     if(word==="yes") {
//         counter++;
//     }
//      word = prompt("Enter your word");
//     }

// console.log(`total times yes count = ${counter}`);



// question:-15  print numbers divisible by 7 form 1 to 50 use modulo % and loop

// for(let i=1; i<51; i++){
//     if(i%7===0) console.log(i); 
// }


// for(let i=7; i<51; i+=7){
//     console.log(i);
// }



// question:-16 sum of all odd numbers from 1 to 30 add only odd numbers print final sum

// let sum = 0;
// for(let i=1; i<31; i++){
//     if(i%2!==0){
//         sum = sum+i;
//     }
//     console.log(i);
// }
// console.log(`total sum = ${sum}`);


// question:-17 keep asking number until user enters an even numbers use while loop stop only if input is even.

// let num = +prompt("Enter only even number");
// while(num%2!==0){
//     num = +prompt("Enter only even number");
// }
// console.log(num);



// question:-18 print numbers between two user inputs inputs start and end using prompts print all between

// let start = +prompt("Enter your first number");
// let end = +prompt("Enter your last number");

// if(start>end) console.error("start can not be bigger than end");

// for(let i=start; i<=end; i++){
//     console.log(i);
// }


// question:-19 ask user 5 numbers count how many are positive use loop 

// let counter =0;
// for(let i=1; i<6; i++){
//     let num = +prompt("Enter your number");
//     console.log(num);
//     if(num>=0) counter++;
// }
// console.log(`total positive numbers = ${counter}`);


// question:-20 ATM simulator allow 3 withdrawals start with 1000 balance ask withdrawal amount 3 times if enough balance deduct else print insufficient balance

// let balance = 1000;
// let flag = false;
// let counter =0;
// while(balance>=0 && counter!==3){
//     let withdraw = +prompt("Enter your amount here");
//     counter++;
//     if(withdraw<=balance) balance-=withdraw;
//     else{
//         flag=true;
//         break;
//     }
// }

// if(flag===true) console.error(("Insufficient balance"));
// console.log(` Your current balance = ${balance}`);






// question for AI 

// question:-1 Ek variable age banao. Agar age 18 ya usse zyada hai toh "Vote kar sakte ho" print karo, warna "Abhi nahi".

// let age = prompt("Enter your age");
// if(age===null) console.error("You cancelled it");
// else if(age.trim() === "" || isNaN(age)) console.error("write properly");
// else if(age<0 || age>110) console.error("This is not valid age");
// else console.log(age>=18 ? "You can vote" : "You can't vote");


// question:-2 Ek number num lo aur check karo ki woh even hai ya odd.

// let num = prompt("Enter your number");
// if(num===null) console.error("You cancelled it");
// else if(num.trim()==="" || isNaN(num)) console.error("write properly");
// else {
//     num = Number(num);
//    if (!Number.isInteger(num)) console.error("Enter only whole number");
// else console.log(num%2===0 ? "Your number is Even" : "Your number is Odd");
// }




// question:-3 Ek variable marks lo aur uske basis par grade print karo:

// Marks	Grade
// 90 ya zyada	A
// 75 se 89	B
// 50 se 74	C
// 50 se kam	Fail

// function marks(val){
//     if(val>=90 && val<=100) return "Grade A";
//     else if(val>=75 && val<=89) return "Grade B";
//     else if(val>=50 && val<=74) return "Grade C";
//     else return "Fail";
// }
// console.log(marks(55));




