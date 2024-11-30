// let a = true;

// setTimeout(() => {
//     a = false
// }, 2000);

// setTimeout(() => {
//     a = false
// });

// while(a) {
//     console.log("hello world")
// } 

console.log(a, "1"); // 1
var a = 1;

setTimeout(function() {
  console.log(a, "2"); //2
  var a = 2;
}, 0);

setTimeout(function() {
  console.log(a, "3"); //2
}, 0);

// setTimeout(function() {
//   console.log(1); //1
// }, 0);

// setTimeout(function() {
//   console.log(2); //2 -> 
// }, -99999);

//  console.log(3); //3 ->1
 
//  function outer() {
//   var count = 0;
  
//   return function inner() {
//     count++; //2
//     console.log(count);  // 2
//   };
// }

// var counter1 = outer();
// counter1(); 
// counter1();

// var x = 1;

// function test() {
//   console.log(x); //1

//   if (false) {
//     var x = 2;
//     console.log(x); 
//   }

//   console.log(x); //1
// }

// test(); 

//arr = [1,0,1,0,2,0,9] 
//const map = new Map();
// for(let i =0;i < arr.length;i++){
//     if(map.get(i)){
//         let count = map.get(i);
//         map.set(arr[i], count + 1);
//     }else{
//       map.set(arr[i], 1);
//     }
// }
// console.log(map);
// for(let i =0;i< arr.length;i++){
//     i
// }




