// Given a number, return an array containing the two halves of the number. 
// If the number is odd, make the rightmost number higher.

function numberSplit(n) {
    return [Math.floor(n/2), Math.ceil(n/2)]
} 

console.log(numberSplit(4), [2, 2])
console.log(numberSplit(10), [5, 5])
console.log(numberSplit(11), [5, 6])
console.log(numberSplit(0), [0, 0])
console.log(numberSplit(1), [0, 1])
console.log(numberSplit(-4), [-2, -2])
console.log(numberSplit(-5), [-3, -2])
console.log(numberSplit(-9), [-5, -4])