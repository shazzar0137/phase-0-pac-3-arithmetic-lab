function add(a,b){
    return a+b
}
console.log(add(3, 5));

function subtract(a,b){
    return a-b
}
console.log(subtract(5, 3));

function multiply(a,b){
    return a*b
}
console.log(multiply(5, 3));


;
function divide(a,b){
    return a/b
}
console.log(divide(9, 3));

function increment(n) {
    return n + 1;
}
console.log(increment(5));

function  decrement(n) {
    return n - 1;
}
console.log( decrement(9));

function makeInt(n){
    return parseInt(n, 19)
}
console.log(makeInt("2.2222"))

function makeInt(n){
    return parseFloat(n, 10)
}
console.log(makeInt("2"))

function makeInt(string) {
    return parseInt(string, 10); 
}
console.log(makeInt("42")); 

function preserveDecimal(string) {
    return parseFloat(string); 
}
console.log(preserveDecimal("3.14")); 