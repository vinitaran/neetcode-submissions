class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let hasSet = new Map()
        for(let i=0; i<nums.length; i++){
            if(hasSet.has(nums[i])){
                return true
            } else{
                hasSet.set(nums[i])
            }
        }
        return false
    }
}
