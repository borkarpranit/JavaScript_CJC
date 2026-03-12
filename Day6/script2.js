let x = 10,y = 1;
if(x<y)
{
    for(let i=x;i<=y;i++)
    {
        console.log("Table of (if)"+i);
        for(let j=1;j<=10;j++)
        {
        console.log(i*j); 
        }
    }
}
else
{
    for(let i=y;i<=x;i++)
    {
        console.log("Table of (else)"+i);
        for(let j=1;j<=10;j++)
        {
            console.log(i*j);
        }
    }
}


