
const obj = {
    name: "Alice",
    greet() {
        console.log(this.name); //this obj

        const innerObj = {
            name: "Inner",
            getName: function () {
                console.log(this.name); //go 1 scope out to line 6 to find this
            }
        }

        innerObj.getName();
    }
}


obj.greet();

const obj1 = {
    name: "Alice",
    greet() {
        console.log(this.name); //this obj

        const innerObj = {
            name: "Inner",
            getName: () => {
                console.log(this.name); //go 1 scope out to line 6 to find this
            }
        }

        innerObj.getName();
    }
}


obj1.greet();


const obj2 = { 
    name: "Alice",
    greet() {
        console.log(this.name); //Alice

        const innerObj = {
            name: "Inner",
            getName: function() { 
                console.log(this.name); //undefined

                const innerMost = function() {
                    //find this here -> { name: "Ali" }
                    const deepest = () => {
                        console.log(this.name); //Ali
                    };
                    return deepest.call({ name: "Bound" });
                    
                }.bind({ name: "Ali" });

                innerMost();
            }
        }
        
        const some = innerObj.getName;
        some();
        
    }
}

obj2.greet();