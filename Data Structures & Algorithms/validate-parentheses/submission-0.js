class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        // create and empty stack
        let stack = []
        let pairs = new Map() 
        pairs.set(')','(')
        pairs.set(']','[')
        pairs.set('}','{')

        // iterate through s
        for ( let i = 0 ; i < s.length ; i++){
            let char=s[i]
        // if current charachter is closing bracket check the top of stack   
          if(pairs.get(char)){
            if(stack.length===0) return false    
            if(stack[stack.length -1] !== pairs.get(char)) return false
                // pop stack
                stack.pop()
          }  // else current charachter is a opening bracket push onto stack
          else{
                stack.push(char)
          }
           
        }
       
          
          
        // after processing everything:
            // if stack is empty -> true
            if(stack.length === 0) return true
            else return false
            // otherwise : false
    }
}
