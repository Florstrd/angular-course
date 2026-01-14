function castValue(value: unknown) {
    if (typeof value === 'string') {
        let stringValue: string = value as string;
        console.log(stringValue);
    }
    else if (typeof value === 'number') {
        let numberValue: number = value as number;
        console.log(numberValue)
    }
    else {
        console.log("Sorry, this is an unsupported type")
    }
}

castValue("Word");
castValue(525);
castValue(false);