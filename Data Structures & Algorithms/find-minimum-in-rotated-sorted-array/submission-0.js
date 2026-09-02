class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        
        let low=nums[0]
        for(let i=0 ; i <= nums.length-1 ; i++){
            if(low>nums[i]) {
             low=nums[i]
                
            }  
        }
        return low
    }
}
