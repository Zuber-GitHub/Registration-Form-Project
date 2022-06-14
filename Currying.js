//Currying Using Bind
let multiply  = function(x,y)
{
    console.log(x*y)
}
let multiplyByTwo = multiply.bind(this,5)
multiplyByTwo(2)

let multiplyByThree  = multiply.bind(this,5)
multiplyByThree(3)

//Currying By Closure

let multiply_01 = function(a){
    return function(b)
    {
        console.log(a*b)
    }
}
let multiply_01Bytwo = multiply_01(5)
multiply_01Bytwo(2)

let multiply_01ByThree = multiply_01(5)
multiply_01ByThree(3)
