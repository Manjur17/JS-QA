async function async1() {
    console.log('Async 1 Start');//2
    await async2();
    console.log('Async 1 End'); //5
  }
  
  async function async2() {
    console.log('Async 2'); //3
  }
  
  console.log('Script Start'); //1
  async1();
  console.log('Script End');//4
  