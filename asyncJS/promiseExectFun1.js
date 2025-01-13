console.log("Start"); // 1

new Promise((resolve, reject) => {
  console.log("Executor 1"); // 2
  resolve("Resolved 1");
}).then((res) => {
  console.log(res); // 4
});

console.log("End"); // 3

//-----------------------------------
console.log("Start"); // 1

new Promise((resolve, reject) => {
  console.log("Executor 1"); // 2
  resolve();
}).then(() => {
  console.log("Then 1"); // 4
  new Promise((resolve, reject) => {
    console.log("Executor 2"); // 5
    resolve("Resolved 2");
  }).then((res) => {
    console.log(res); // 6 -> Resolved 2
  });
});

console.log("End"); // 3

//----------------------------------------
console.log("Start"); // 1

new Promise((resolve, reject) => {
  console.log("Executor 1"); // 2
  setTimeout(() => {
    console.log("Timeout 1"); // 4
    resolve("Resolved 1");
  }, 0);
}).then((res) => {
  console.log(res); // 5 -> Resolved 1
});

console.log("End"); // 3

//------------------------------------------
console.log("Start"); // 1

new Promise((resolve, reject) => {
  console.log("Executor 1"); // 2
  resolve("Resolved 1");
}).then((res) => {
  console.log(res); // 5 -> Resolved 1
});

new Promise((resolve, reject) => {
  console.log("Executor 2"); // 3
  resolve("Resolved 2");
}).then((res) => {
  console.log(res); // 6 -> Resolved 2
});

console.log("End"); // 4

//---------------------------------------
console.log("Start"); // 1

new Promise((resolve, reject) => {
  console.log("Executor 1"); // 2
  resolve();
}).then(() => {
  console.log("Then 1"); // 4
  new Promise((resolve, reject) => {
    console.log("Executor 2"); // 5
    resolve("Resolved 2");
  }).then((res) => {
    console.log(res); // 6 -> Resolved 2
  });
});

console.log("End"); // 3

//------------------------------------------
console.log("Start"); // 1

new Promise((resolve, reject) => {
  console.log("Executor 1"); // 2
  reject("Rejected 1");
}).then(
  (res) => {
    console.log(res); // Will it run?
  },
  (err) => {
    console.log("this will run " , err); //  Rejected 1
  }
);

console.log("End"); // 3

console.log("Start"); // 1

new Promise((resolve, reject) => {
  console.log("Executor 1"); // 2
  reject("Rejected 1");
})
  .then((res) => {
    console.log(res); // Will it run?
  })
  .catch((err) => {
    console.log(err); // this will run
  });

console.log("End"); // 3

//------------------------------------------
console.log("Start"); // 1

new Promise((resolve, reject) => {
  console.log("Executor 1"); // 2
  reject("Rejected 1");
}).catch((err) => {
  console.log(err); // 5 -> Rejected 1
});

new Promise((resolve, reject) => {
  console.log("Executor 2"); // 3
  reject("Rejected 2");
}).catch((err) => {
  console.log(err); // 6 -> Rejected 2
});

console.log("End"); // 4

//-----------------------------------------
console.log("Start"); // 1

new Promise((resolve, reject) => {
  console.log("Executor 1"); // 2
  setTimeout(() => {
    console.log("Timeout 1"); // 6
    resolve("Resolved 1");
  }, 0);
}).then((res) => {
  console.log(res); // 7 -> Resolved 1
});

new Promise((resolve, reject) => {
  console.log("Executor 2"); // 3
  resolve("Resolved 2");
}).then((res) => {
  console.log(res); // 5 -> Resolved 2
});

console.log("End"); // 4