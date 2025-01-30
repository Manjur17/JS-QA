//shallow copy from spread operator and Object.assign()
let obj = {};

function makeDeepCopy(obj) {
    if (typeof obj !== "object" || obj === null) {
        return obj;
    }

    let finalObj = Array.isArray(obj) ? [] : {};

    for (let key in obj) {
        finalObj[key] = makeDeepCopy(obj[key]); //we have to check if inner key's value is nested or not recursively
    }

    return finalObj;

    // let keys = Object.keys(obj);

    // for (let i = 0; i < keys.length; i++) {
    //     const element = keys[i];
    //     //console.log(obj.element); //why this gives undefined as element is variable and not a key
    //     finalObj[element] = makeDeepCopy(obj[element]) //we have to check if inner key's value is nested or not recursively
    // }
}

const ans = makeDeepCopy({ name: "Manjur", age: 25 });
console.log(ans);
