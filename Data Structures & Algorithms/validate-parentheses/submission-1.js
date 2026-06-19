class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stash = []
        const hash = {']': '[', ')' : '(', '}' : '{'}

        for(let i = 0; i < s.length; i++){
            if(hash[s[i]]){
                if(hash[s[i]] === stash[stash.length-1]){
                    stash.pop()
                }else{
                    return false
                }
                
            }else{
                stash.push(s[i])
            }
        }
        return stash.length === 0;
    }
}
