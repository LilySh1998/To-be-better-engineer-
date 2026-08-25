class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        if(prices.length===1) return 0
        let max=0;

        for(let i = 0; i <= prices.length-1 ; i++ ){
            for(let j = i+1; j <= prices.length-1 ; j++ ){
                const profit=prices[j]-prices[i]
                if(profit>0 && profit>max) max=profit
            }
        }
        return max

    }
}
