module.exports = function reverse (n) {
    let arr = n.toString().split("");
    if (arr[0] != '-') {
        return arr.reverse().join("");
    } else {
        newArr = arr.splice(1, 3);
        return newArr.reverse().join("");
    }
};