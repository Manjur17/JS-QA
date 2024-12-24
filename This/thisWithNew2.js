//Separate this Contexts:
//this inside Inner refers to the object created by new Inner.
//this inside Outer refers to the object created by new Outer.

function Outer(name) {
    this.outerName = name;

    function Inner(innerName) {
        this.innerName = innerName;
    }

    const inner = new Inner("Inner Alice"); //this -> inner -> {innerName : "Inner Alice"}
    console.log(inner.innerName); //Inner Alice
}

const outer = new Outer("Outer Alice"); //this -> outer -> {outerName : "Outer Alice"} 
console.log(outer.outerName); //Outer Alice

//--------------------------------------------
function Outer(name) {
    this.outerName = name;

    function Inner(innerName) {
        this.innerName = innerName;
        this.shared = name; // Accesses `Outer`'s `name` parameter
    }

    const inner = new Inner("Inner Alice");  //this -> inner -> {innerName : "Inner Alice", shared : "Outer Alice"}
    console.log(inner.innerName); // Inner Alice
    console.log(inner.shared);    // Outer Alice
}

const outer1 = new Outer("Outer Alice"); //this -> outer -> {outerName : "Outer Alice"} 
console.log(outer1.outerName); //Outer Alice

//----------------------------------------------
function Outer(name) {
    this.outerName = name;

    function Inner(innerName) {
        this.innerName = innerName;
        //In the Inner constructor, this.outerName tries to access the outerName property.
        //However, this inside Inner refers to the newly created inner object, which does not have an outerName property.
        //Therefore, this.outerName evaluates to undefined.
        this.fullName = `${this.outerName} - ${this.innerName}`; // Depends on `this.outerName`
    }

    const inner = new Inner("Inner Alice"); ////this -> inner -> {innerName : "Inner Alice", fullName : "undefined - Inner Alice"}
    console.log(inner.fullName); // undefined - Inner Alice
}

const outer2 = new Outer("Outer Alice"); //this -> outer -> {outerName : "Outer Alice"} 
console.log(outer2.outerName); //Outer Alice

//fix for above
function Outer(name) {
    this.outerName = name;

    function Inner(innerName, outerName) {
        this.innerName = innerName;
        this.fullName = `${outerName} - ${this.innerName}`;
    }

    const inner = new Inner("Inner Alice", this.outerName);
    console.log(inner.fullName); // Outer Alice - Inner Alice
}

//-------------------------------------------------------------------
function Outer(name) {
    this.name = name;
    return 42; // Primitive value, ignored by `new`
}

const outer3 = new Outer("Outer Alice"); //this -> outer -> {name: Outer Alice} 
console.log(outer3.name); // Outer Alice
console.log(outer3);      //Outer {name: Outer Alice}

//----------------------------------------------------------------------

function Outer(name) {
    this.name = name;

    function Inner(innerName) {
        this.innerName = innerName; //this becomes global so innerName is availabe inside Global
    }

    const inner = Inner("Inner Alice"); // Forget `new` here
    console.log(inner); // undefined as function doesnot return anything
}

const outer4 = new Outer("Outer Alice"); //this -> outer -> {name: Outer Alice} 
console.log(global.name ); //undefined 
console.log(global.innerName ); //Inner Alice from 

//----------------------------------------------------------------------
function Outer(name) {
    this.name = name;

    function Inner(innerName) {
        this.innerName = innerName;
        return { customProperty: "Custom Value" }; // Explicit return
    }

    const inner = new Inner("Inner Alice"); //this -> inner -> { customProperty: "Custom Value"}
    console.log(inner.customProperty); // Custom Value
    console.log(inner.innerName);      // undefined
}

const outer5 = new Outer("Outer Alice");//this -> outer -> {name: Outer Alice} 
console.log(outer5.name); // Outer Alice

//------------------------------------------------------------------------
function Outer(name) {
    this.name = name;

    function Inner(innerName) {
        this.innerName = innerName;
    }
    
    //all instances of Inner will inherit getFullName method.
    Inner.prototype.getFullName = function () {
        return `${this.name} ${this.innerName}`;
    };

    const inner = new Inner("Inner Alice"); //this -> inner -> {innerName : Inner Alice}
    console.log(inner.getFullName()); // undefined Inner Alice
}

const outer6 = new Outer("Outer Alice"); //this -> outer -> {name: Outer Alice}

