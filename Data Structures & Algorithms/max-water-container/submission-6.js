class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        //define two pointers left & right
        let right=heights.length - 1
        let left=0

        let currentArea=0
        let maxArea=0
        while(left < right){
                    // calculate width = right - left
            let width= right - left
                    // Calculate height= min (height[right], height[left])
            let height= Math.min(heights[right], heights[left])
        // calc currentArea=width * height 
        currentArea= width * height 
        if(currentArea > maxArea){
            maxArea = currentArea
        }
        // move pointers with the samller height

        if(heights[left] > heights[right]){
            right= right - 1
        }
        else {
            left = left + 1
        }
        }
       return maxArea
        
    }
}
