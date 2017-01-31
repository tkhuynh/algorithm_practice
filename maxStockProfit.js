// Suppose we could access yesterday's stock prices as an array, where:

// The indices are the time in minutes past trade opening time, which was 9:30am local time.
// The values are the price in dollars of Apple stock at that time.
// So if the stock cost $500 at 10:30am, stockPricesYesterday[60] = 500;.

// Write an efficient function that takes stockPricesYesterday and returns the best profit I could have made from 1 purchase and 1 sale of 1 Apple stock yesterday.

// For example:

//   var stockPricesYesterday = [10, 7, 5, 8, 11, 9];

// getMaxProfit(stockPricesYesterday);
// returns 6 (buying for $5 and selling for $11)

var stockPricesYesterday = [10, 20, 5, 17, 8, 19, 18, 6];

function getMaxProfit(prices) {
  
}

getMaxProfit(stockPricesYesterday); // => 14 (when buying at 5 and selling at 19)