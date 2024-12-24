console.log('Start'); //1

setTimeout(() => {
  console.log('Task 1'); //3
}, 0);

setTimeout(() => {
  console.log('Task 2'); //6
}, 100);

setTimeout(() => {
  console.log('Task 3');//4
  setTimeout(() => {
    console.log('Nested Task'); //5
  }, 0);
}, 50); 

console.log('End');//2


//---------------------------------
console.log('X'); //1

setTimeout(() => {
  console.log('Y'); //3
  setTimeout(() => {
    console.log('Z'); //4
  }, 0);
}, 0);

setTimeout(() => {
  console.log('W'); //5
}, 50);

console.log('Q'); //2
