// Javascript Functions
// 1.Basic Function

function msg(){
    console.log("Welcome");
}
msg();


// 2.Function Expression
const msg1 = function(){
    console.log("Hello");   
}
msg1();


// 3.Arrow Function
const msg2 = () => console.log("Arrow Function");
msg2();

//Examples-----------------------------------------------------------

// Addition using Function Expression
const add = function(a,b){
    let c = a+b;
    console.log("Addition by function expression is: "+c);  
}
add(4,5);



//Addition using Arrow Function--------------------------------
const addd = (x,y)=>{console.log("Arrow Function Addition: "+(x+y));
}
addd(200,100);

//Substraction using Arrow Function
const sub = (x,y)=>{console.log("Arrow Function Substraction: "+(x-y));
}
sub(300,100);

// Multiplication using Arrow Function
const mul = (x,y)=>{console.log("Arrow Function Multiplication: "+(x*y));
 //   return x*y;
}
mul(5,2);

//Division using Arrow Function
const div = (x,y)=>{console.log("Arrow Function Division: "+(x/y));
}
div(1000,10);



//Array Examples---------------------

let numarr = [7,5,3,4,9,1,2];
//Sorting array
console.log(numarr.sort((n1,n2)=>n1-n2));   //asc
console.log(numarr.sort((n1,n2)=>n2-n1));   //desc

//filter 
console.log(numarr.filter((n)=>n%2==0));    //even no

//map
console.log(numarr.map((no)=>no*no));       //square of elements


let cities = ['Pune','Mumbai','Chennai','Bangalore'];
//Sort String array
console.log(cities.sort((c1,c2)=>c1.localeCompare(c2)));    //asc sort
console.log(cities.sort((c1,c2)=>c2.localeCompare(c1)));    //desc


//Filter the array
console.log(cities.filter((c)=>c.length>5)); //cities length greater than 5

//Concat 
console.log(cities.map((ct)=>ct.concat(',IND')));   //concat String