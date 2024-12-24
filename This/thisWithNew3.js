//return the this pattern
function Outer(name) {
    this.name = name;

    function Inner(innerName) {
        this.innerName = innerName; //this is Outer's this

        return this; // Explicitly returning `this` which is Outer's this
    }

    const inner = Inner.call(this, "Inner Alice"); // Call `Inner` with Outer’s `this` -> this -> inner -> outer -> {name: Outer Alice, innerName: Inner Alice}
    console.log(this.innerName); // Inner Alice
    console.log(inner.innerName); //inner == outer -> {name: Outer Alice, innerName: Inner Alice}
    
}

const outer = new Outer("Outer Alice"); //this -> outer -> {name: Outer Alice, innerName: Inner Alice}
console.log(outer.name); // Outer Alice
console.log(outer.innerName); //Inner Alice

//----------------------------------------------------------------

function Outer(name) {
    this.name = name;
}

function Inner(innerName) {
    this.innerName = innerName;
    //we are not returning anything unlike Explicitly returning `this` in above example
}

//nothing is returned from Inner so it is empty inner -> {} whereas //outer -> {name: Outer Alice, innerName: Inner Alice}
//const inner = Inner.call(new Outer("Outer Alice"), "Inner Alice");
const outer1 = new Outer("Outer Alice");
const inner = Inner.call(outer, "Inner Alice");
console.log(outer1.name); //Outer Alice
console.log(outer1.innerName); //Inner Alice

// console.log(inner.name);       //error
// console.log(inner.innerName);  //error

