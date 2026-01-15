type ArrayValues = {
    sum: number;
    count: number;
}

const arrayNumbers: number[] = [1, 5, 5, 5, 6];

function calcArray(arrayNumbers: number[]): ArrayValues {

    let sum = 0;
    let count = 0;

    for (let i = 0; i < arrayNumbers.length; i++) {
        sum += arrayNumbers[i];
        count++
    }

    return {
        sum,
        count
    };
}

const test = calcArray(arrayNumbers);
console.log(`Sum: ${test.sum} & count: ${test.count}`);

