const tail = require("./tail");
const head = require("./head");
let ans = []

const filter = (list, func) => {
    if (list.length == 0) {
        result = ans
        ans = []
        return result
    }

    let element = head(list)
    checkCondition(func, list, element);
    return filter(tail(list), func)

}
module.exports = filter

function checkCondition(func, list, element) {
    if (func(head(list)))
        ans.push(element);
}


