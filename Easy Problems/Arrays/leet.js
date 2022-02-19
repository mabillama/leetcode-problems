/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let total = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      total = total + prices[i] - prices[i - 1];
    }
  }
  // console.log(`Max profit is $${total} for ${prices}`); /* Action */
};

maxProfit([7, 1, 5, 3, 6, 4]);
maxProfit([1, 2, 3, 4, 5]);
maxProfit([7, 6, 4, 3, 1]);
// [7,1,5,3,6,4] expected output = 7
// [1,2,3,4,5] expected output = 4. Already sorted
// [7,6,4,3,1] expected output = 0. Reverse sorted
