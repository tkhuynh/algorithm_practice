// Vanya got an important task — he should enumerate the books in the library and label each book with its number. Each of the n books should be assigned with a number from 1 to n. Naturally, each book should have a unique number.

// Vanya wants to know how many digits he will have to write down as he labels the books. Your task is to help him!

// Example

// For n = 13, the output should be
// VanyaAndBook1s(n) = 17.

// The books should be labeled with numbers 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, which totals to 17 digits.

// Input/Output

// [time limit] 4000ms (js)
// [input] integer n

// The number of books in the library.

// Constraints:
// 1 ≤ n ≤ 10^8


// logic to solve on paper/whiteboard
// from 1-9 there are 9 numbers, each has 1 digit
// from 10-99 there are 90 numbers, each has 2 digits
// from 100-999 there are 900 numbers, each has 3 digits
// and so on..
// VanyaAndBook1s(1000) // => 2893 because
// 1-9, 9 numbers with 1 digit >> total of 9 digits
// 10-99, 90 numbers with 2 digits >> total of 90x2 = 180 digits
// 100-999, 900 number with 3 digits >> total of 900x3 = 2700 digits
// 1000, 1 number with 4 digits >> total of 1x4 = 4 digits
// 9 + 180 + 2700 + 4 = 2893

function VanyaAndBook1s(n) {
		// if n is one digits return n
    if (n < 10) return n;

    // if n is 2 digits or more, first get total digits of n
    var digits = n.toString().length;
    // count how many number we could have for example 90 number with 2 digits mean total of 180 number

   	// count the toal number we could have on 1 to the largest number with less than 1 digit compared to total digits of n
   	// for example if n = 100, we count from total of number from 1 to 99
    count = 0;
    for (var i = 1; i < digits; i++) {
      count += 9 * Math.pow(10, i -1) * i;
    }
    // then we add the total numbers we count above with the total digit of the difference between n and the largest number with less than 1 digit compared to total digits of n
    // for example if n = 100, the resule will be count + (100 - 99) * 3
    return parseInt(count) + (n - Math.pow(10, digits - 1) + 1) * digits;
}

console.log(VanyaAndBook1s(100)); // 192
console.log(VanyaAndBook1s(1000)); // 2893
console.log(VanyaAndBook1s(244)); // 624