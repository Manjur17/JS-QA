//shallow copy from spread operator and Object.assign()
let obj = {};

function makeDeepCopy(obj) {
    if (typeof obj !== "object" || obj === null) {
        return obj;
    }

    let finalObj = Array.isArray(obj) ? [] : {};

    for (let key in obj) {
        finalObj[key] = makeDeepCopy(obj[key]); // Recursively clone nested objects
    }

    return finalObj;
}

const ans = makeDeepCopy({ name: "Manjur", age: 25 });
console.log(ans);
