function print(name: string, occupation: string, wage: string): string {
    return `Hey, ${name}. You are an ${occupation} and your hourly wage is ${wage} dollars.`
}

console.log(print("Sam", "Engineer", "25"))