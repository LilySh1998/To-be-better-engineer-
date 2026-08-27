class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let maxSum=nums[0]
        let curSum=0;
        for(let i = 0; i <= nums.length-1 ; i++) {
            if(curSum < 0) curSum=0
            curSum=curSum+nums[i]
            maxSum=Math.max(maxSum,curSum)
        }
        return maxSum
    }
}
