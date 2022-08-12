module.exports = function towelSort(matrix) {

    const newArr = [];
    let result = [];
    if (arguments.length === 0) {
        return result;
    } else if (matrix.length === 0) {
        return result;
    } else {
        for (let i = 0; i < matrix.length; i++) {
            if (i % 2 === 0) {
                let string = matrix[i];
                newArr.push(string);
            } else if (i % 2 !== 0) {
                let reverse = matrix[i].reverse();
                newArr.push(reverse);
            }
        }
    }

    return result.concat(...newArr);
}
