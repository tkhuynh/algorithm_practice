// Numbers x and y (x ≠ y) are called friendly if the sum of proper divisors of x is equal to y, and the other way round.

// Given two integers x and y, your task is to check whether they are friendly or not.

// Example

// For x = 220 and y = 284, the output should be
// friendly_numbers(x, y) = "Yes".

// The proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110, which add up to 284; and the proper divisors of 284 are 1, 2, 4, 71 and 142, which add up to 220.

/*
	Logic
	First check if x === y, if so "No"
	When x !== y
	Find sum of all proper divisors of x and y. Note: according to the question, x is not a divisor of x
	Then compare if um of all proper divisors of x equal y and um of all proper divisors of y equal x
*/

function friendly_numbers(x, y) {

}

console.log(friendly_numbers(66928, 66992)); // => "Yes"
console.log(friendly_numbers(6, 6)); // => "No"
console.log(friendly_numbers(220, 284)); // => "Yes"
