var simplifyPath = function(path) {
   path = path.split("/")
   let stack = []
   for (let i = 0; i < path.length; i++) {
        const v = path[i]
        if (v === "." || v === "" || v === " ") {
            continue;
        } else if (v === "..") {
            stack.pop();
        } else {
            stack.push(v)
        }
   }
   return "/" + stack.join("/")
};