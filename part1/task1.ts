function arraySum(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum
}

console.log(arraySum([5, 5, 1, 3]));