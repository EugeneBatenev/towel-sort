module.exports = function towelSort (matrix) {
    if (!matrix) return [];
    let arr = [];
    for (i = 0; i < matrix.length; i++){
        for (j = 0; j < matrix[i].length; j++){
            let columnIdx = i % 2 === 0 ? j : (matrix[i].length - j - 1);
            arr.push(matrix[i][columnIdx]);
        }
    }

    return arr;
}
