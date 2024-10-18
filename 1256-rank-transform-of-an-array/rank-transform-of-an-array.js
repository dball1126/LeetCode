/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
    let copy = [...arr]
    copy.sort((a,b)=> a-b)

    let map = new Map(), rank = 1
    console.log(copy)
    copy.forEach((v, i) => {
        if (!map.has(v)) {
            map.set(v, rank)
            rank++
        }
    })

    let result = []
        arr.forEach(v =>{
            result.push(map.get(v))
        })
    return result
};