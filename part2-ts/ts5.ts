class ArrValues {
    sum: number;
    count: number;

    constructor(sum: number, count: number) {
        this.sum = sum;
        this.count = count;
    }
}

class Calculator {
    public calculate(numbers: number[]): ArrValues {

        let sum = 0;
        let count = 0;
        
        for (let i = 0; i < numbers.length; i++) {
            sum += numbers[i];
            count++
        }

        return new ArrValues(sum, count)
    }
}

class Main {
    static run(): void {
        const arrayNumbers: number[] = [1, 5, 5, 5, 6];

        const calculator = new Calculator();
        const result = calculator.calculate(arrayNumbers);

        console.log(`Sum: ${result.sum} & count: ${result.count}`);
    }
}

Main.run()