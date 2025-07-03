window.onload = function() {

let who = ['The dog', 'My grandma', 'The mailman', 'My bird', 'The dog', 'My grandma', 'The mailman', 'My bird', 'The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];
console.log(who.length) 
console.log(who[0])

console.log(action.length) 
console.log(action[0]) 

console.log(what.length) 
console.log(what[0])  

console.log(when.length) 
console.log(when[0])



let whoRandom = Math.floor(Math.random() * who.length);
console.log(whoRandom)
console.log(who[whoRandom])

let actionRandom = Math.floor(Math.random() * action.length);
console.log(actionRandom)
console.log(action[whoRandom])

let whatRandom = Math.floor(Math.random() * what.length);
console.log(whatRandom)
console.log(what[whoRandom])

let whenRandom = Math.floor(Math.random() * when.length);
console.log(whenRandom)
console.log(when[whoRandom])

document.querySelector("#excuse").innerHTML = who[whoRandom]
document.querySelector("#excuse").innerHTML = action[whoRandom]
document.querySelector("#excuse").innerHTML = what[whoRandom]
document.querySelector("#excuse").innerHTML = when[whoRandom]
};
