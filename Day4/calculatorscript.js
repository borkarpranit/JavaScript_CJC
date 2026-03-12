// Calculator

// Addition Function
function add()
{
    let a = parseInt(document.getElementById("num1").value);
    console.log(a);
    let b = parseInt(document.getElementById("num2").value);
    console.log(b);
    
    let c = a+b;
    console.log(`Addition of ${a} and ${b}: ${c}`);
    
    document.getElementById("result").innerText = `Addition of ${a} and ${b}: ${c}`;
    document.getElementById("result").style.color = "red";
    document.getElementById("result").style.backgroundColor = "aqua";
}

// Substraction Function
function sub()
{
    let a = parseInt(document.getElementById("num1").value);
    let b = parseInt(document.getElementById("num2").value);
    let c = a-b;
    console.log(c);
    document.getElementById("result").innerText =  `Substraction of ${a} and ${b}: ${c}`;
}

// Multiplication Function
function mul()
{
    let a = parseInt(document.getElementById("num1").value);
    let b = parseInt(document.getElementById("num2").value);
    let c = a*b;
    console.log(c);  
    document.getElementById("result").innerText =  `Multiplication of ${a} and ${b}: ${c}`;
}

// Division Function
function div()
{
    let a = parseInt(document.getElementById("num1").value);
    let b = parseInt(document.getElementById("num2").value);
    let c = a/b;
    console.log(c);  
    document.getElementById("result").innerText =  `Division of ${a} and ${b}: ${c}`;
}