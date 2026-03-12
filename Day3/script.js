// 1. Simple Function

function m1()
{
    console.log("Simple Function"); 
}
m1()

// 2. Parameterized Function

function m2(a,b)
{
    console.log("Parameterized Function");   
}
m2(1,1);
// alert("Addition Performed");

// ----------------------------------------------------------------------

// 1) Simple Function
// 1.Addition
function add()
{
    let a = 10;
    let b = 20;
    let c = a + b;
    console.log(`Addition of ${a} & ${b} is: ${c}`);
}
add();

// 2.Substraction
function sub()
{
    let a=20;
    let b=1;
    let c=a-b;
    console.log(`Substraction of ${a} & ${b} is: ${c}`);
}
sub();

// 3.Multiplication
function mul()
{
    let a=9;
    let b=9;
    let c=a*b;
    console.log(`Multiplication of ${a} & ${b} is: ${c}`);
}
mul();

// 4.Division
function div()
{
    let a=9;
    let b=3;
    let c=a/b;
    console.log(`Division of ${a} & ${b} is: ${c}`);
}
div();


// 2) Parameterized Function
// 5.Addition
function padd(a,b)
{
    let c=a+b;
    console.log(`Addition of ${a} & ${b} is: ${c}`);
}
padd(2,2);

// 6.Substraction
function psub(a,b)
{
    let c=a-b;
    console.log(`Substraction of ${a} & ${b} is: ${c}`);
}
psub(20,19);

// 7.Multiplication
function pmul(a,b)
{
    let c=a*b;
    console.log(`Multiplication of ${a} & ${b} is: ${c}`);  
}
pmul(10,10);

// 8.Division
function pdiv(a,b)
{
    let c=a/b;
    console.log(`Division of ${a} & ${b} is: ${c}`); 
}
pdiv(4,2);


// 3) Return Type Function
// 9.Addition
function radd()
{
    let a=2;
    let b=1;
    return a+b;
}
let a1 = radd();
console.log(    a1);

// 10.Substraction
function rsub()
{
    let a=5;
    let b=3;
    return a-b;
}
let s1=rsub();
console.log("Substraction: "+s1);

// 11.Multiplication
function rmul()
{
    let a=5;
    let b=5;
    return a*b;
}
let m=rmul();
console.log("Multiplication: "+m);

// 12.Division
function rdiv()
{
    let a=5;
    let b=5;
    return a/b;
}
let d1=rdiv();
console.log("Division: "+d1);



// 4) Return Type With Parameterized Function
// 13.Addition
function add2(a,b)
{
    return a+b;
}
let sum =add2(100,100);
console.log("Addition: "+sum);

// 14.Substraction
function sub2(a,b)
{
    return a-b;
}
let b =sub2(100,50);
console.log("Substraction: "+b);

// 15.Multiplication
function mul2(a,b)
{
    return a*b;
}
let mulpr = mul2(25,25);
console.log("Multiplication: "+mulpr);

// 16.Division
function div2(a,b)
{
    return a/b;
}
let divpr=div2(1000,250);
console.log("Division: "+divpr);