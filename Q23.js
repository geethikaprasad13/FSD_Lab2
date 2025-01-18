function* cumulativeSum(arr) {
    let sum = 0;
    for (let num of arr) {
        sum += num; 
        yield sum;  
    }
    return sum; 
}

const arr = [1, 2, 3]
const generator = cumulativeSum(arr);

for (let value of generator) {
    console.log(value); 
}

const { value: finalSum } = generator.next();
console.log(`Final Sum: ${finalSum}`); 