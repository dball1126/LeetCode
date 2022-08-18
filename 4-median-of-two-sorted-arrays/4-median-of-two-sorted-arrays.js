// ***********************************************************

/**        aLeft|aRight
 * Formaula  [1]|[4]
 *           [2]|[3]
*          bLeft|bRight

    a Left <= bRight && bLeft <= aRight

 * Time: log(n) n is the smallest array between a and b
 * Space: O(1)
 */

const findMedianSortedArrays = (a, b) => {
    if (b.length < a.length) return findMedianSortedArrays(b, a)

    let s = 0, e = a.length - 1, mid = Math.floor((b.length + a.length) / 2) - 2

    while (true) {
        let aMid = Math.floor((s + e) / 2)
        let bMid = mid - aMid;

        let aLeft = aMid >= 0 ? a[aMid] : -Infinity
        let aRight = aMid+1 < a.length ? a[aMid+1] : Infinity
        let bLeft = bMid >= 0 ? b[bMid] : -Infinity
        let bRight = bMid+1 < b.length ? b[bMid+1] : Infinity

        if (aLeft <= bRight && bLeft <= aRight) {
            if ((a.length + b.length) & 1) { // odd
                return Math.min(aRight, bRight)
            } else { // even
                return (Math.max(aLeft, bLeft) + (Math.min(aRight, bRight))) / 2
             }
        } else if (aLeft > bRight) {
            e = aMid - 1
        } else {
            s = aMid + 1
        }
    }
}