// Basic Callback Function

//1.callback by String
function a(name){
console.log("a function");
console.log(name);
}

function b(callback){
    console.log("b function");
    callback("CJC")
}
b(a);


//2.callback by number
function a1(num){
console.log("a1 function");
console.log(num);
}

function b1(n){
console.log("b1 function");
n(6);
}
b1(a1);



// Callback using Arrow Function 
const aa = (city)=>console.log(city);
const bb = (callback)=>{
    let cityName = "PUNE";
    callback(cityName);
}
bb(aa);

// // setTimeout Function ---> (Inbuild Function)
// function message(){
//     console.log("Hello");
// }
// setTimeout(message,2000);


// New Features of JavaScipt --> 1.Spread Operator  2.Rest Parameter    3.Destructuring
//  1.Spread Operator (...)

// 1.1 Spread Operator(Array)
let arr1 = [1,2,3];
let arr2 = [4,5,6];
let newarr = [...arr1,...arr2,10];
console.log(newarr);

// 1.2 Spread Operator(Objects)
let company ={
    cname:"Google",
    address:"USA"
}

let employee1 = {
    id:1,
    ename:"Rohan",
    age:25,
    ...company
}

let employee2 = {
    id:2,
    ename:"Nikhil",
    age:22,
    ...company
}

let employee3 = {
    id:1,
    ename:"Rohan",
    age:25,
    cmp:{...company}
}
console.log(employee1);
console.log(employee2);
console.log(employee3);


//  2.Rest Parameter (...) -> Pass n no of argument to function
function m(...numbers){
    console.log("Rest Parameter");
    for(let no of numbers){
        console.log(no);        
    }
}
m(1,2,3,4,5);

console.log("Another Rest Ex.");
function m2(x,y,...rest){
    console.log(x);
    console.log(y);
    console.log(...rest);
}
m2(1,2,3,4,5)


// 3.Destructuring -->(Objects,Array)

// 3.1 Object Destructuring
let product = {
    pid:1001,
    pname:"Laptop",
    price:40000.0,
    color:"Grey"
}
const {pname,price}=product;
console.log("Object Destructuring -->");
console.log(pname);
console.log(price);

// 3.2 Array Destructuring
let arr3 = [5,6,2,1,9,4];
const [f,s,,fo] = arr3;
console.log("Array Destructuring -->");
console.log(f);
console.log(s);
console.log(fo);


// // Generic Array Destructuring Example
// let arr4 = ["Rohan","Ankit",3,5,{id:101,name:"nikhil",age:34},{cname:"tcs",city:"pune"}];
// const [o,t,th,four,{id,name,age}= five,{cname,city}] = arr4;
// //const {id,name,age}= five;
// //const {cname,city}= six;

// console.log(o);
// console.log(t);
// console.log(th);
// console.log(four);
// console.log(id);
// console.log(name);
// console.log(age);
// console.log(cname);
// console.log(city);


// Nested Object Destructuring Example
let school={
    id:1,
    sname:"MIT",
    sub : ["Marathi","English","Maths","History"],
    marks:[79,67,86,58],
    student:{
        rollno:101,
        stuname:"Ankit",
        address:"Pune",
        Mob:9846383663
    }
}
const {id,sname,sub:[marathi,english,maths,history],marks:[mar,e,ma,h],student:{rollno,stuname,address,Mob}}=school;

console.log(id);
console.log(sname);
console.log(marathi+":"+mar);
console.log(english+":"+e);
console.log(maths+":"+ma);
console.log(history+":"+h);
console.log(rollno);
console.log(stuname);
console.log(address);
console.log(Mob);