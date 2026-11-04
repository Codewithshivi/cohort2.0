
// question for level 1 

// 1.  Write a function `sayHello()` that prints `"Hello JavaScript"`.

// function sayHello(){
//     console.log("Hello javaScript");  
// }
// sayHello();



// 2. Create a function `add(a, b)` that returns their sum and log the result.

// function add(a,b){
//     console.log(a+b);
// }
// add(2,5);



// 3. Write a function with a default parameter `name = "Guest"` that prints `"Hi <name>"`.

// function greating(name="Guest"){
// console.log(`Hi ${name}`);
// }
// greating();
// greating("Savita");


// 4. Use rest parameters to make a function that adds unlimited numbers.

// function unlimited(...nums){
// let ans = nums.reduce(function(acc,val){
//     return acc+val;
// },0);
// console.log(ans);
// }

// unlimited(23,53,23,6,65,7);


// 5. Create an IIFE that prints `"I run instantly!"`.

// (function(){
//     console.log("I run instantly");
// })();


// 6. Make a nested function where the inner one prints a variable from the outer one.

// function parent(){
//     let a=12;
//     function child(){
//         console.log(a);
//     }
//     child();
// }

// parent();

// 7. Create an array of 5 fruits. Add one at the end and remove one from the beginning.

// let fruits= ["Apple","Mango","Orange","Grapes","kiwi"];
// fruits.push("Papaya");
// fruits.shift();
// console.log(fruits);


// 8. Use a `for` loop to print all elements of an array.

// let array= [1,2,3,5,7,5,8];
// for(let i=0; i<array.length; i++){
//     console.log(array[i]);
// }

// 9. Create an object `person` with keys `name`, `age`, and `city`, and print each key’s value.

// let person ={
//     name: "Savita", 
//     age: 21,
//     city: "Meerut",
// };
// for(let key in person){
//     console.log(person[key]);
// }


// 10. Use `setTimeout()` to log `"Time’s up!"` after 2 seconds.

// setTimeout(function(){
//     console.log("Time's up!");
// },2000);

// level 2:-

// 11. write a higher ordered function runTwice(fn) that takes another function and executes it two times.

// function runTwice(fn){
// fn();
// fn();
// }
// runTwice(function(){
//     console.log("Hello");
// })


// 12. create on pure function that always return the same output for given input, and one impure function using a global variable.

// let counter=0;
// function pure(a,b){
//     console.log(a+b);
// }

// pure(2,4);
// pure(2,4);
// pure(2,4);

// function impure(a){
//     counter++;
//     console.log(a+counter);
// }

// impure(2);
// impure(2);
// impure(2);
// impure(2);

 
// 13. write a function that uses object destructuring inside parameters to extract and print name and age.
// function abc({name,age}){
// console.log(name,age);
// }
// abc({name:"Savita",age:21});

// 14. given and array of numbers use map() to create a new array where each number is squared

// let arr =[1,4,2,5,6,7];
// let array= arr.map(function(val){
//     return val*val;
// })
// console.log(array);


// 15. use filter to get only even numbers from an array

// let arr =[23,63,234,786,45,2,6,25];
// let array= arr.filter(function(val){
//     return val%2===0;
// })
// console.log(array)


// 16. use reduce() to find the total salary from an array of numbers [1000,2000,3000]

// let salary=[1000,2000,3000];
// let newSalary= salary.reduce(function(acc,val){
// return acc+val;
// },0);

// console.log(newSalary);



// 17. create an array of names and use some() and every() to test a condition (all names longer than 3 chars)

// let names= ["savita","pol","om","savi"];
// let ans=names.some(function(val){
//     return val.length>3;
// });
// console.log(ans);

// let ans1= names.every(function(val){
//     return val.length>3;
// });
// console.log(ans1);


// 18. create an object user and test the behavior of object freeze() and seal() by adding and changes key

// let user ={
//     name:"savita",
//     age:21,
//     city:"Meerut",
// };

// user.age=24;
// console.log(user.age);
// Object.freeze(user);
// user.age=33;
// console.log(user.age);
// Object.seal(user);
// user.age=55;
// console.log(user.age);


// 19. create a nested object (user=>address=>city) and access the city name inside it

let obj ={
    user:{
        name:"Savita",
        address:{
            city:"meerut",
        },
    },
};
let{city}= obj.user.address;
console.log(city);











