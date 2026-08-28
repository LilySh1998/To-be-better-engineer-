class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let left=1
        let right=1
        let output=[]

        for(let i = 0; i<=nums.length-1 ; i++){
            output[i]=left
            left= left * nums[i]
        }
        for(let i = nums.length-1; i >=0 ; i--){
            output[i]=output[i] * right
            right= right * nums[i]
        }
        return output
    }
}
