
// Functions in Javascript
// Q11 - Params vs Arguments O/P Based Question

//rest parameter should be the last params
// const fn = (a, ...numbers, x, y) => {
//     console.log(x, y)
// };

const fn = (a, x, y, ...numbers) => {
    console.log(x, y)
};

fn(5, 6, 3, 7)

arr = [1, 2, 3];

function name(...params) {//rest params
    console.log(params);

}

name(...arr); //spread operator