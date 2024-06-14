function A(...a:number[]):any
{
    console.log("Function A");
    console.log("First ",a);
    console.log("Number of Arguments", a.length)
}

A(10,20);
A(10,20,30);
A(10);