// INPUT -- > array  = [1,2,2,2,3,3,] target =2
// OUTPUT ---> [1,3]
// so find first and last index of target in the array 

let array = [1, 2, 2, 2, 3, 3,];
let target = 2;

function findIndex() {
    let first = -1, last = -1;
    for (let i = 0; i < array.length; i++) {
        if (array[i] == target) {
            if (first == -1) {
                first = i;
                last = i; //if the element is present only once then last = i
            } else {
                last = i;
            }
        }
    }

    return [first, last];
}

let ans = findIndex();
console.log(ans);
