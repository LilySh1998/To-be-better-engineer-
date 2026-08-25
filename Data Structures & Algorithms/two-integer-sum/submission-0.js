function twosum(nums, target) {
  // TODO: Implement your solution here
  // Hint: Consider using a hash map to store values and their indices
  for(let i=0;i<nums.length-2;i++){
    for(let j=1;j<nums.length-1;j++){
      if(nums[i]+nums[j]===target) console.log([i,j])
    }
  }

}
twosum([1,2,3,4],4)