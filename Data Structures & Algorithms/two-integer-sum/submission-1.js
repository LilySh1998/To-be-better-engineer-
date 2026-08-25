function twoSum(nums, target) {
  // TODO: Implement your solution here
  // Hint: Consider using a hash map to store values and their indices
  for(let i=0;i<nums.length;i++){
    for(let j=i+1;j<nums.length;j++){
      if(nums[i]+nums[j]===target) console.log([i,j])
    }
  }

}
twoSum([1,2,3,4],4)