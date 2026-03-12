// Conditional Statements
// 1.If----else if-------else

    let no = 5;
    if(no > 0)
    {
        console.log("Positive Number");     
    }
    else if(no < 0)
    {
        console.log("Negative Number");     
    }
    else
    {
        console.log("Number is zero");      
    }


    // 2.switch case

    let day=2;
    switch (day) {
        case 1:
            console.log("Sunday");
            break;
        
        case 2:
            console.log("Monday");
            break;

        case 3:
            console.log("Tuesday");
            break;

        case 4:
            console.log("Wedensday");
            break;

        case 5:
            console.log("Thursday");
            break;
        
        case 6:
            console.log("Friday");
            break;

        case 7:
            console.log("Saturday");
            break;
            
        default:
            console.log("Invalid Number");
    }


    // Looping Satements
    // 1.For Loop --------> 1.simple for loop   2.For of Loop(Array)   3.For in Loop(Object)
    // 2.while Loop


    // 1)Simple for Loop
    console.log("Simple for Loop");
    for(let i=1;i<=10;i++)
    {
        console.log(i);  
    }

    // 2)For of Loop
    let arr=[4,7,9,2,5,1];
    console.log("For of Loop"); 
    for(let i of arr)
    {
        console.log(i);  
    }

    // 3)For in Loop
    let student={
        rollno:1,
        name:"Nikhil",
        marks:97.3,
        city:"Shevgaon"
    }
    console.log("For in Loop");
    for(let prop in student)
    {
        console.log(prop+":"+student[prop]);
    }


    // 2.while Loop
    let n=1;
    console.log("While Loop");
    while(n<=10)
    {
        console.log(n);
        n++;
    }

    // Table of 5
    console.log("Table of 5"); 
    let m=5,i=1;
    while (i<=10) {
        let a = m*i;
        console.log(a);  
        i++;    
    }