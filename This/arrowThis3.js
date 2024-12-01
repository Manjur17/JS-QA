
let obj = {
    x: 1,
    y: 2,
    fn: function () {
        x = 3; //autoglobals
        y = 4;
        const printVariables = () => {
            console.log(this.x, this.y); //this is obj so o/p is 1 , 2
            console.log(x, y);//local variables so o/p is 3, 4
        }
        printVariables()
    }
}

obj.fn()

let obj2 = {
    x: 1,
    y: 2,
    fn: function () {
        x = 3; //autoglobals
        y = 4;
        const printVariables = () => {
            console.log(this.x, this.y); //this is obj so o/p is 1 , 2
            console.log(x, y);//local variables so o/p is 3, 4
        }
        printVariables()

        const printVariables2 = () => {
            this.x = 22;
            this.y = 32;
            console.log(this.x, this.y); //this is obj so o/p is 1 , 2
            console.log(x, y);//local variables so o/p is 3, 4
        }
        printVariables2()
    }
}

obj2.fn()