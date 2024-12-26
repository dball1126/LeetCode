/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function(accounts) {
    let acctsLen = accounts.length;
    let roots = [...(new Array(acctsLen)).keys()];
    let ranks = [...new Array(acctsLen)].fill(1);
    let emails = new Map();

    const findRoot = (n) => roots[n] === n ? n : findRoot(roots[n]);

    const union = (n1, n2) =>{
        let p1 = findRoot(n1), p2 = findRoot(n2);
        if (p1 === p2) return;
        if (ranks[p1] > ranks[p2]) {
            roots[p2] = p1
        } else if (ranks[p2] > ranks[p1]) {
            roots[p1] = p2
        } else {
            roots[p2] = p1
            ranks[p1]++
        }
    }

    for (let i = 0; i < acctsLen; i++) {
        for (let j = 1; j < accounts[i].length; j++) {
            let email = accounts[i][j];
            if (!emails.has(email)) {
                emails.set(email, i)
            } else {
                union(i, emails.get(email))
                let root = findRoot(i)
                emails.set(email, root)
            }
        }
    }

    let groups = new Map()
    for (let [email, root] of emails) {
        let newRoot = findRoot(root)
        if (!groups.has(newRoot)) groups.set(newRoot, new Set())
        groups.get(newRoot).add(email)
    }
    let result = []
    for (let [root, set] of groups) {
        let groupEmails = []
        groupEmails.push(accounts[root][0])
        groupEmails.push(...Array.from(set).sort())
        result.push(groupEmails)
    }

    return result;
};