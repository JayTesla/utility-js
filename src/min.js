const min = (list) => {

    if (list.length == 0)
        return undefined

    let arr = list
    let n = arr.length
    if (n == 1)
        return arr[0]

    minNumber(arr)
    removeFirstElement(arr)
    return min(arr)

}


function minNumber(arr) {
    if (arr[0] < arr[1])
        arr[1] = arr[0]
}

function removeFirstElement(arr) {
    arr.shift()
}



module.exports = min