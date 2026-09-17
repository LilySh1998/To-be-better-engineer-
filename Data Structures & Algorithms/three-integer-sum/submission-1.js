class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a,b)=> a - b) 
        const result = []
        for( let i = 0; i< nums.length - 2; i++){
            let left = i + 1
            let right = nums.length -1
            let target= -(nums[i])
           if( i > 0 && nums[i] === nums [i-1]) continue
           while( left < right ){
                let sum = nums[right] + nums[left]
                
                if( sum < target){
                    left = left + 1
                }
                else if (sum > target){
                    right = right - 1
                }
                else {
                    result.push([nums[i],nums[left],nums[right]])
                    left = left + 1 
                    right = right - 1
                    while(left < right && nums [left] === nums [left -1] ) { left = left + 1 }
                    while(left < right && nums [right] === nums [right + 1])
                    right = right - 1}
                }

           }
    return result

        }  
}
