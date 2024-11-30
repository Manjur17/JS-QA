function createCounters() {
    var counters = [];
    //var i gets function scope after loop end 
    //and every function(ananymous one) has allvar i in its lexical/closures
    //i = 3 now
    for (var i = 0; i < 3; i++) {
        counters[i] = function () {
            console.log(i);  // ?
        };
    }

    return counters;
}

var counters = createCounters();
counters[0]();  // 3
counters[1]();  // 3
counters[2]();  // 3 

function outer() {
    var count = 0;
    
    return function inner() {
      count++; //count in closure of inner
      console.log(count);  
    };
  }
  
  var counter1 = outer(); //function returned and counter1 has function body of inner()
  counter1();  // 1
  counter1();  // 2
  
  var counter2 = outer();
  counter2();  // 1
  counter1();  // 3
  counter2();  // 2 

  function outer() {
    var x = 10;
  
    return function inner() {
      var y = 20;
  
      return function innermost() {
        var z = 30;
        console.log(x + y + z);
      };
    };
  }
  
  var closure1 = outer(); 
  var closure2 = closure1(); 
  closure2();  // What will this log? output is 30 