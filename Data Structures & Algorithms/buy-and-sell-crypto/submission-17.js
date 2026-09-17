class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let minPrice = prices[0]

        let maxProfit = 0;

        for (let price of prices){
            minPrice = Math.min(minPrice, price)
            let currProfit = price - minPrice;
            
            maxProfit = Math.max(maxProfit, currProfit)
        } 
        return maxProfit
    }
}
