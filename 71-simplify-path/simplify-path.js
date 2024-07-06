/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    
    let arr = path.split("/")
    let stack = []

    for (let i = 0; i < arr.length; i++) {
        let v = arr[i]

        if (v === ".") {
            continue;
        } else if (v === "..") {
            stack.pop()
        } else if (v !== "" && v !== " ") {
            stack.push(v)
        }
    }

    return "/" + stack.join("/")
};