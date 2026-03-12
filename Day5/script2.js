let prodArr = [{id:1,name:"Mobile",price:25000,categary:"electronics"},{id:2,name:"Table",price:10000,categary:"Furniture"},
{id:3,name:"TV",price:15000,categary:"electronics"},{id:4,name:"Bike",price:100000,categary:"vehicle"},
{id:5,name:"Laptop",price:80000,categary:"electronics"}]
console.log(prodArr[0].name);

console.log(prodArr.sort((o1,o2)=>o1.name.localeCompare(o2.name))); //sort by name
console.log(prodArr.sort((o1,o2)=>o1.price-o2.price));      //Asc price
console.log(prodArr.sort((o1,o2)=>o2.price-o1.price));    //Desc price

console.log(prodArr.filter((o1)=>o1.categary==="electronics"));

for(let i of prodArr){
    console.log(i.id);
    console.log(i.name);  
    console.log(i.categary);
    console.log(i.price); 
}


// Map ==> Map is used to return all Element from Array/perform operation on array.
//Filter ==> Filter is separate out elements from arry according to condition & perform operation on that elements.
// sort ==> Sort is used to sort the elements by Ascending and Descending by specific property like id,name,salary,etc.

let numarr1 = [1,22,7,15,100,3];
console.log(numarr1.filter((n)=>n%2==0).map((n)=>n*n));
console.log(numarr1.filter((n)=>n%2!=0).map((n)=>n*n*n));


let coarr = ["Red","White","Black","Green","Blue","Orange"];
console.log(coarr.map((i)=>i.toUpperCase()));
console.log(coarr.map((i)=>i.toLowerCase()));
console.log(coarr.filter((i)=>i.startsWith('R')));
console.log(coarr.map((item)=>item.length));
console.log(coarr.filter((item)=>item.length>4).map((i)=>i.toUpperCase()));
