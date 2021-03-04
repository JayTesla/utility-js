const tail = require("./tail");
const head = require("./head");


const reduce = (list, func, value) => {
    if (list.length == 0) {
        return value
    }

    let element = head(list)
    value = updateValue(value, func, element);

    return reduce(tail(list), func, value)

}
module.exports = reduce

function updateValue(value, func, element) {
    if (value)
        value = func(value, element);
    else
        value = element;
        
    return value;
}
