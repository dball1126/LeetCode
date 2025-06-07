class Node {
    var keys:[Character:Node]
    var isWord: Bool
    init() {
        self.keys = [:]
        self.isWord = false
    }
}


class Trie {
    var root: Node;
    init() {
        self.root = Node()
    }
    
    func insert(_ word: String) {
        var copy = self.root

        for (i, c) in word.enumerated() {
            
            if let item = copy.keys[c] {
                copy = item
            } else {
                let nde = Node()
                copy.keys[c] = nde
                if let item = copy.keys[c] {
                    copy = item
                }
               
            }
            
            if i == word.count - 1 {
                copy.isWord = true
            }
        }
    }
    
    func search(_ word: String) -> Bool {
        var copy = self.root

        for (i, c) in word.enumerated() {
            if let item = copy.keys[c] {
                copy = item
            } else {
                return false
            }
            if i == (word.count - 1) && copy.isWord {
                return true
            }
        }

        return false
    }
    
    func startsWith(_ prefix: String) -> Bool {
        var copy = self.root

        for (i, c) in prefix.enumerated() {
            if let item = copy.keys[c] {
                copy = item
            } else {
                return false
            }
            if i == (prefix.count - 1 ){
                return true
            }
        }

        return false
    }
}