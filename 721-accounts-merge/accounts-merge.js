// time: O(n ( log(n))...n is the number of accounts
var accountsMerge = function(accounts) {
    let emails = new Map();
    let len = accounts.length;
    let root = [...(new Array(len).keys())];
    let rank = [...new Array(len)].fill(1);
    const findRoot = (n) => n === root[n] ? root[n] : findRoot(root[n]) // path compression

    const union = (n1, n2) => {
        let p1 = findRoot(n1), p2 = findRoot(n2);
        if (p1 === p2) return;

        if (rank[p1] > rank[p2]) {
            root[p2] = root[p1]
        } else if (rank[p2] > rank[p1]) {
            root[p1] = root[p2];
        } else {
            rank[p1]++;
            root[p2] = root[p1]
        }
    }
    for (let j = 0; j < accounts.length; j++) {
        let acct = accounts[j];
        for (let i = 1; i < acct.length; i++) {
            let name = acct[0];
            let email = acct[i];
            if (!emails.has(email)) emails.set(email, new Set());
            emails.get(email).add(j);
        }
    }

    for (let [email, ids] of emails) { // union find
        let idsArray = Array.from(ids);
        for (let i = 1; i < idsArray.length; i++) {
            union(idsArray[i-1], idsArray[i]);
        }
    }
    let mergedEmailAccounts = new Map();
    for (let i = 0; i < accounts.length; i++) {
        let parent = findRoot(i);
        if (!mergedEmailAccounts.has(parent)) mergedEmailAccounts.set(parent, new Set());
        for (let j = 1; j < accounts[i].length; j++) {
            let email = accounts[i][j];
            mergedEmailAccounts.get(parent).add(email);
        }
    }
    const mergedAccounts = [];

    for (let [k , emailsSet] of mergedEmailAccounts) { 
        let name = accounts[k][0];
        let emails = Array.from(emailsSet);
        emails.sort();
        mergedAccounts.push([name, ...emails]);
    }
    return mergedAccounts;
};