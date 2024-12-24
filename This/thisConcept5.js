const obj = {
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

obj.greet();

//-----------------------------------------------------

const obj2 = {
    name: "Alice",
    greet: function () {
        console.log(this.name);

        const innerObj = {
            name: "Inner",
            getName: function () {
                console.log(this.name);

                const innerMost = () => {
                    console.log(this.name);

                    const deeper = function () {
                        console.log(this.name);

                        const deepest = () => {
                            console.log(this.name);

                            const final = function () {
                                console.log(this.name);
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

obj2.greet();
