const tail = require("./tail");
const head = require("./head");
const cube = require("./cube");
let ans = []

const map = (list, func) => {
    if (list.length == 0) {
        result = ans
        ans = []
        return result
    }

    ans.push(func(head(list)))
    return map(tail(list), func)
}

module.exports = map
