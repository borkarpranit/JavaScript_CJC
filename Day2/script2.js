// Data Types in JavaScript
// 1) Primitive DataTypes

// 1.number
let d = 7;
let e = 8.837;
console.log(d);
console.log(e);


// 2.String
let f = "Rohan";
let grade = 'A';
console.log(f);
console.log(grade);


// 3.boolean
let isPass = true;
console.log(isPass);


// 4.BigInt
let g = 1234567890123456789n;
console.log(g);


// 5.null
let h = null;
console.log(h);


// 6.undefined
let i;
console.log(i);


// 7.Symbol
let j = Symbol('xyz');
let k = Symbol('xyz');
console.log(j==k);



// 2) Non-Primitive DataTypes

// 1.Object
let user = {
    id:1,
    name:"Nikhil",
    age:22
}
console.log(user);
console.log(user.name);

// 2.Array
let arr = [3,5,6,1]
console.log(arr);
console.log(arr[1]);
for(let i=0;i<arr.length;i++)
{
    console.log(arr[i]);
    
}

let arr1 = ["Pune","Mumbai","Nashik","Bangalore"]
console.log(arr1);
console.log(arr1[2]);

// Object Function
let student = {
    rollno:1,
    name:"Nikhil",
    age:23,
}
console.log(student);
student.mobile=9876543210
console.log(student);
console.log(student.name);
student.name="Rohan"
console.log(student.name);

// Array Function
let emparr = [{id:1,name:"Ankit"},{id:2,name:"Nikhil"},{id:3,name:"Rohan"},{id:4,name:"Sandesh"}]
console.log(emparr);
console.log(emparr[0]);
console.log(emparr[0].name);
emparr[0].name="Ankit Ghongate";
console.log(emparr[0].name);

// Nested Object
let stud={
    rollno:1,
    name:"Nikhil",
    age:23,
    address:{
        city:"Pune",
        pincode:412214,
        landmark:{
            pincodee:[12345,98776,45678]
        }
    }
}
console.log(stud);
console.log(stud.address.city);
stud.address.city="Shevgaon";
console.log(stud.address.city);
console.log(stud.address.landmark.pincodee[1]);

let ab=10,cd=3;
if(ab<cd)
{
    console.log(ab);
}
else
{
    console.log(cd);    
}

// let abc=prompt("Enter number")
// console.log(abc);

// let num = prompt("Enter the Number");
// if(num>0){console.log("Number is Positive");}
// else if(num==0){console.log("Number is Zero");}
// else{console.log("Number is Negative");}

// let num = prompt("Enter the Number");
// if(num%2==0){console.log("Number is Even");}
// else{console.log("Number is Odd");}

// let num = prompt("Enter the Number");
// let count = 0;
// for(let i=1;i<=num;i++)
// {
//     if(num%i==0)
//     {
//         count++;
//     }
// }
// if(count==2)
// {
//     console.log("Prime Number");
// }
// else
// {
//     console.log("Not Prime Number");   
// }


// let s = Number(prompt("Enter Number 1"));
// let t = Number(prompt("Enter Number 2"));
// let sum = s + t;
// console.log(sum);

let emp={
    id:101,
    name:"Sushant Lokhande",
    age:29
}
console.log(emp);
emp.address={
    localaddress:"Pune",
    permanentaddress:"Sangavi"
}
console.log(emp);
