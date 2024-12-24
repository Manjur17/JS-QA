//no reaasignment of const
const num = 233;

if (0 == 1) {
    num = 298; //as no formal declaration, so this is ignored at parsing and we never come here at execution phase
}

console.log(num);// no error
