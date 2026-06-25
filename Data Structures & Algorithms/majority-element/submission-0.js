class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        const n = nums.length
        while(true){
            const candidate = nums[Math.floor(Math.random() * n)]
            let count = 0
            for(let n of nums){
                if(n === candidate){
                    count++
                }
            }
            if(count > Math.floor(n/2)){
                return candidate
            }
        }
    }
}