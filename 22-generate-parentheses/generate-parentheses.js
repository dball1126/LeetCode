const generateParenthesis = (n) => {

    const memo = [...new Array(n+1)]

    const dp  = (nde) => {
        if (nde <= 0) return ['']
        if (memo[nde]) return memo[nde]
        let result = []

        for (let i = 0; i < nde; i++) {
            let left = dp(i), right = dp(nde - i - 1)
            
            for (let l of left) {
                for (let r of right) {
                    result.push("(" + l + ")" + r)
                }
            }
        }
        return memo[nde] = result
    }

    return dp(n)
};