const obj = { 
    name: "Alice",
    greet() {
        console.log(this.name); // Logs "Alice" (this refers to obj)

        const innerObj = {
            name: "Inner",
            getName: () => { 
                console.log(this.name); // Logs "Alice" (this is lexically inherited from obj)
            }
        }
        
        innerObj.getName();
    }
}

obj.greet();

//------------------------------------------------------------
const obj0 = {
    name: "Alice",
    greet() {
        console.log(this.name); //Alice

        const innerObj = {
            name: "Inner",
            getName: function () {
                //this is { name: "Suresh" } as this is bind
                console.log(this.name); //Suresh

                const innerMost = function () {
                    //{ name: "Ali" }
                    console.log(this.name); //Ali

                    const deepest = () => {
                        console.log(this.name); //Ali
                    };

                    return deepest.call({ name: "Deepest" });
                }.bind({ name: "Ali" });

                innerMost.call({ name: "Kumar" });
            }.bind({ name: "Suresh" })
        };

        innerObj.getName.call({ name: "Ravi" });
    }
};

obj0.greet();

//------------------------------------------------------------
const obj5 = { 
    name: "Alice",
    greet() {
        console.log(this.name); // Logs "Alice"

        const innerObj = {
            name: "Inner",
            getName() { 
                console.log(this.name); // Logs ?
                const innerMost = () => {
                    console.log(this.name); // Logs ?
                }
                innerMost();
            }
        }
        
        innerObj.getName();
    }
}

obj5.greet();

//------------------------------------------------------------
const obj6 = { 
    name: "Alice",
    greet() {
        console.log(this.name);

        const innerObj = {
            name: "Inner",
            getName: function() { //this here is the innerObj
                console.log(this.name);

                const innerMost = function() {
                    console.log(this.name);
                }.bind(this); //this here is the innerObj

                innerMost();
            }
        }
        
        innerObj.getName();
    }
}

obj6.greet();

//------------------------------------------------------------
const obj7 = { 
    name: "Alice",
    greet() {
        console.log(this.name);

        const innerObj = {
            name: "Inner",
            getName: function() { 
                console.log(this.name);

                const innerMost = () => {
                    console.log(this.name);
                }
                //.bind({ name: "Bound" }); -> syntax error

                innerMost();
            }
        }
        
        innerObj.getName();
    }
}

obj7.greet();

//------------------------------------------------------------
const obj8 = { 
    name: "Alice",
    greet() {
        console.log(this.name);

        const innerObj = {
            name: "Inner",
            getName: function() { 
                console.log(this.name);

                const innerMost = function() {
                    const deepest = () => {
                        console.log(this.name);
                    };
                    return deepest.call({ name: "Bound" });
                }.bind({ name: "Ali" });

                innerMost();
            }
        }
        
        innerObj.getName();
    }
}

obj8.greet();

//------------------------------------------------------------
const obj9 = { 
    name: "Alice",
    greet() {
        console.log(this.name);

        const innerObj = {
            name: "Inner",
            getName: function() { 
                console.log(this.name);

                const innerMost = function() {
                    const deepest = function() {
                        console.log(this.name);
                    }.bind({ name: "Deepest" });

                    return deepest();
                }.bind({ name: "Ali" });

                innerMost();
            }.bind({ name: "Bound" })
        }
        
        innerObj.getName();
    }
}

obj9.greet();

//------------------------------------------------------------
const obj1 = {
    name: "Alice",
    greet() {
        console.log(this.name); //Alice

        const innerObj = {
            name: "Inner",
            getName: function () {
                //this is { name: "Suresh" }
                console.log(this.name); //Suresh

                const innerMost = function () {
                    //this -> { name: "Ali" }
                    console.log(this.name); //Ali

                    const deeper = () => {
                        //this -> { name: "BoundDeepest" }
                        const deepest = function () {
                            console.log(this.name); //BoundDeepest
                            //find this lexically here
                            const final = () => {
                                console.log(this.name); //BoundDeepest
                            };

                            return final.call({ name: "Final" });
                        }.bind({ name: "BoundDeepest" });

                        return deepest.call({ name: "Deepest" });
                    };

                    return deeper.call({ name: "Deeper" });
                }.bind({ name: "Ali" });

                innerMost.call({ name: "Kumar" });
            }.bind({ name: "Suresh" })
        };

        innerObj.getName.call({ name: "Ravi" });
    }
};

obj1.greet();

//---------------------------------------------------
const obj3 = {
    name: "Alice",
    greet: () => {
        //this is global one
        console.log(this.name); //1. undefined

        const innerObj = {
            name: "Inner",
            getName: function () {
                //this is { name: "Suresh" }
                console.log(this.name); //2.Suresh

                //find this here for innerMost which is -> { name: "Suresh" }
                const innerMost = () => {
                    //this -> { name: "Suresh" }
                    console.log(this.name); //3.Suresh

                    const deeper = () => {
                        //find this here -> { name: "Suresh" }
                        const deepest = function () {
                            //this -> { name: "BoundDeepest" }
                            console.log(this.name); //4.BoundDeepest

                            const final = () => {
                                console.log(this.name); //5.BoundDeepest
                            };

                            return final.call({ name: "Final" });
                        }.bind({ name: "BoundDeepest" });

                        return deepest.call({ name: "Deepest" });
                    };

                    return deeper.call({ name: "Deeper" });
                };

                innerMost.call({ name: "Kumar" });
            }.bind({ name: "Suresh" })
        };

        innerObj.getName.call({ name: "Ravi" });
    }
};

obj3.greet();

//------------------------------------------------

const obj4 = {
    name: "Alice",
    greet: function () {
        //this -> { name: "Outer" }
        console.log(this.name); //1.Outer

        const innerObj = {
            name: "Inner",
            getName: function () {
                //this -> { name: "Suresh" }
                console.log(this.name); //2. Suresh

                const innerMost = () => {
                    //lexically ->  //this -> { name: "Suresh" } bind doesnot work
                    console.log(this.name); //3. Suresh
                        
                    const deeper = function () {
                        //this -> { name: "BoundDeeper" } from bind
                        console.log(this.name); //4. BoundDeeper

                        const deepest = () => {
                            ////this -> { name: "BoundDeeper" } from lexically
                            console.log(this.name);//5.BoundDeeper

                            const final = function () {
                                //this -> { name: "BoundFinal" }
                                console.log(this.name); //6. BoundFinal
                            }.bind({ name: "BoundFinal" });

                            return final.call({ name: "Final" });
                        }

                        return deepest.call({ name: "Deepest" });
                    }.bind({ name: "BoundDeeper" });

                    return deeper.call({ name: "Deeper" });
                };

                innerMost.call({ name: "Kumar" });
            }.bind({ name: "Suresh" })
        };

        innerObj.getName.call({ name: "Ravi" });
    }.bind({ name: "Outer" })
};

obj4.greet();
