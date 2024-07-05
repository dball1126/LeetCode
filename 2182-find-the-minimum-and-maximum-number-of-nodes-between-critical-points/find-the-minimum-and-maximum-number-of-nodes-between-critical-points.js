/**
 * In Software Engineering. It's a good idea to break items down into blocks or tasks.
 * We will do the same with this algorithm where we grab all ranges and then iterate over them
 */
var nodesBetweenCriticalPoints = function(head) {
    
    let idx  = 0, hasmin = false, hasmax = false, result = [], items = [];
    let stack = []
    while (head) {
        stack.push([head.val, idx])
        head = head.next
        idx++
    }
    if (stack.length <= 1) return [-1,-1]
    for (let i = 1; i < stack.length-1; i++) {
        let prev = stack[i-1][0], nx = stack[i+1][0], v = stack[i][0]
        if ((prev > v && nx > v )|| (v > prev && v > nx)) {
            items.push(stack[i][1])
        }
    }

    if (items.length > 1) {
        let max = items[items.length-1] - items[0], min = Infinity
        for (let i = 1; i < items.length; i++) {
            min = Math.min(min, items[i] - items[i-1])
        }
       return [min,max]
    } else {
        return [-1,-1]
    }

    return result.length >= 1 ? result : [-1,-1]
};