// Scope of Variables

//1.var
var a = 10;
var a = 20;            // Can be redeclare
a = 30;                // Can be updated
console.log(a);

//2.let
let b = 10;
// var b = 20;         // Can not be redeclare (Error)
b = 40;                // Can be updated
console.log(b);

//3.const
const c = 50;          // Must be Initialize at declaration
// const c = 60;       // Can not be redeclare (Error)
// c = 70;             // Can not be updated (Error in Browser console) 
console.log(c);

