//declaration
function f1(p){
 console.log("f1" + p);
}
//function expression
var f2 = function (p){
    console.log("f2" + p);
}

f1("test1");
f2("test2");

//declare function after call, it works, interpreter hoists it
func3("test3")

function func3(p){
    console.log("func3" + p);
}

//declare function after call, it gives an error
/*console.log(func4);
func4("test4");

var func4 = function(p){
    console.log("func4"+p);
}*/

//immediately invoked function expression IIFE

var iife = (function(a,b){return a+b}(2,3));
console.log("iife:" + iife)