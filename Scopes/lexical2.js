//nested scope
function fun() {
    var x = 10;
    function gun() {
        var y = 20;
        console.log(x); //10 in lexical scope of gun()(fun scope)
        console.log(y); //20 local scope of gun()
    }
    gun(); //next scope or 1 scope out for gun() is fun() scope
    console.log(x); //10 local scope of fun()
    console.log(y); //error as no y in local scope or lexical scope of fun
}

fun();