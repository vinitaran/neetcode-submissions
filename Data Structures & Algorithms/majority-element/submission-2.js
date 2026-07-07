class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let res = 0
        let count = 0
        for(let n of nums){
            if(count === 0){
                res = n
            }
            if(res === n){
                count++
            }else{
                count--
            }
        }
        return res
    }
}