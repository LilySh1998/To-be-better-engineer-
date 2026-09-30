class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();
    // For every word:
        for (let word of strs){
        // create 26 empty counters
        let count = new Array(26).fill(0)
        
        for (let char of word ){
            // count its letters
            const index = char.charCodeAt(0) - 'a'.charCodeAt(0)
            count[index]++;
        }
        // turn those counts into a stable key
        let key = count.join("#")
       
        //     if this key doesn't exist:
         if(!map.has(key)) map.set(key, [])
        //         create a group
        //     add the word to that group
        map.get(key).push(word)

       
        }
        // return all groups
        return Array.from(map.values())
    }
}
