function addNums(a,b)
{
    return this.num + a+b
}
let numObj = {num:5}
//Using Call
console.log(addNums.call(numObj,2,4))
//Using apply
let numArray = [2,4]
console.log(addNums.apply(numObj,numArray))
//Using apply
let bound = addNums.bind(numObj)
console.log(bound(2,4))



let studentObj = {age:20}
function printAge()
{
    return this.age
}
let studentAge  = printAge.bind(studentObj)
console.log(studentAge())