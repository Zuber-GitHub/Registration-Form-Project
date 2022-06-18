console.log('person1:shows ticket');
console.log('person2:shows ticket');

const preMovie = async() =>
{
 const promiseWifeBringingTicks  = new Promise((resolve,reject)=>{
   setTimeout(() => resolve('ticket'),2000);
 });

const getPopcorn = new Promise((resolve,reject)=>resolve(`Popcorn`));
const addbutter = new Promise((resolve,reject)=>resolve(`butter`));
const coldDrinks = new Promise((resolve,reject)=>resolve(`coldDrinks`));

//const getCandy = new Promise((resolve,reject)=>resolve(`Candy`));

//const getCoke = new Promise((resolve,reject)=>resolve(`Coke`));

let ticket = await promiseWifeBringingTicks;

//let [Popcorn, Candy, Coke] = await Promise.all([getPopcorn, getCandy, getCoke])

//console.log(`${Popcorn}, ${Candy}, ${Coke}`);

console.log(`wife:i have the ${ticket}`)
console.log('husband: we should go in')
console.log('wife:no i am hungry');

let popcorn = await getPopcorn;

console.log(`wife:i got some ${popcorn}`)
console.log('husband: we should go in')
console.log('wife:no i need butter on my popcorn');

let butter = await addbutter;

console.log(`wife:i got some ${butter} on popcorn`)
console.log('husband: we should go in')
console.log('wife: no i need some cold drinks');

let colddrinks = await coldDrinks;
console.log(`wife:i got some ${colddrinks} on popcorn`)
console.log('husband: this is it, lets go now ')
console.log('wife: Yeah, lets go ');

return ticket;
}

preMovie().then((m) => console.log(`person3: shows ${m}`));

console.log('person4:shows ticket');
console.log('person5:shows ticket');