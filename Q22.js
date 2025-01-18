function* combineSequences(arr) {
    let a = 0, b = 1; 
    let i = 0; 
    while (true) {
        if (i < arr.length) {
            yield arr[i++];
        }
        yield a;
        [a, b] = [b, a + b]; 
    }
}
const arr = [1, 2, 3, 4];
const generator = combineSequences(arr);
for (let i = 0; i < 10; i++) {
    console.log(generator.next().value); 
}
