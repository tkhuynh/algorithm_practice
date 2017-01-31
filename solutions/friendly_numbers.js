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
	if (x === y) return "No";
	return sum_of_divisors(x) == y && sum_of_divisors(y) == x ? "Yes" : "No";
}

function sum_of_divisors(num) {
	var sum = 0;
	// most efficient way to find all divisor without having to loop from 1 to number
	for (var i = 1; i <= Math.floor(Math.sqrt(num)); i++) {
		if (num % i === 0) {
			sum += i;
			// since x is not divisor of x so we have to also check if num / i !== num
			if (num / i !== i && num / i !== num) {
				sum += num / i;
			}
		}
	}
	return sum;
}

console.log(friendly_numbers(66928, 66992)); // => "Yes"
console.log(friendly_numbers(6, 6)); // => "No"
console.log(friendly_numbers(220, 284)); // => "Yes"
