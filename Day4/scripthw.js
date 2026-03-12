//Table of 2 Number
let a = 2;
console.log("Table of 2");
for(let i=1;i<=10;i++)
{
    let r = a*i;
    console.log(r);
}


//Prime Number
let b = 2;
let count=0;
for(let i=1;i<=b;i++){
    if(b%i==0){
        count++;
    }
}
if(count==2){
    console.log("Prime Number"); 
}
else{
    console.log("Not Prime Number"); 
}


// Program to check Vowel or consonant
let arr1 = ['a','e','i','o','u'];
let inp = 'e';
let isVowel = false;
for(let i of arr1)
{
    if(inp==arr1[i]){
        isVowel = true;      
    }
}
if (isVowel) {
    console.log("It's Vowel");
}
else{
    console.log("It's Consonant");
}


// Array Operation
array = [5,2,7,3,1];
revar = [];
let countt=0;
for(let i=array.length-1;i>=0;i--)
{
    revar.push(array[i]);
}
console.log(revar);

for(let i of array)
{
    if(array[i]%2==0){
        console.log("Even number: "+array[i]);  
    }
    else{
        countt++;
    }
}
console.log("Total odd numbers in array: "+countt);


//Check given String is Pallindrome or not
let str="radar";
let revstr="";
for(let i=str.length-1;i>=0;i--)
{
    revstr+=str[i];
}
if(str==revstr){
    console.log("Palindrome");   
}
else{
    console.log("Not Palindrome");
}