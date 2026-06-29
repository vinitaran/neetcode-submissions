class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let ans = [...nums]
        for(let n of nums){
            ans.push(n)
        }
        return ans
    }
}
