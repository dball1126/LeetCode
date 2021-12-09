const minCostClimbingStairs = (nums) => {
    if (nums.length === 2) return Math.min(nums[0], nums[1])
    if (nums.length === 3) return Math.min(nums[1], nums[0] + nums[2])

    const memo = new Map()

    const dp = (i) => {
        if (i < 0) return 0;
        if (memo.has(i)) return memo.get(i)

        memo.set(i,
            nums[i] + Math.min( dp(i-2), dp(i-1) )
        )

        return memo.get(i)
    }
    dp(nums.length-1)

    return Math.min(memo.get(nums.length-1), memo.get(nums.length-2))
}