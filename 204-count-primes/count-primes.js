var countPrimes = function(n) {
    const primes = [...new Array(n)].fill(true);
    primes[0] = false;
    primes[1] = false;
    let count = 0;

    for (let i = 2; i < n; i++) {
        if (primes[i]) {
            count++;
            let j = i, k = i;
            while (j * i < n) {
                j *= i;
                primes[j] = false;
            }
            while (k + i < n) {
                k += i;
                primes[k] = false;
            }
        }
    }
    return count;
};