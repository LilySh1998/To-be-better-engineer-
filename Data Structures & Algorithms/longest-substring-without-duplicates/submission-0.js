class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
            // define start
            let start=0
            // define lastIndex
            let lastIndex= new Map();

            // define max length
            let maxLength = 0

            for( let i = 0 ; i < s.length ; i++ ){
                let currentChar= s[i]
            if (
                lastIndex.has(currentChar) &&
                lastIndex.get(currentChar) >= start
            )   {                   
                    start= lastIndex.get(currentChar) + 1

                }
            
            if ( maxLength < (i - start) + 1 ) 
                maxLength = (i - start) +1

          
          lastIndex.set(s[i],i)
  }
      return maxLength     
    }
}
