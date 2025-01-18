function customItr(a) {
    let count = 0;
    let curr = 1; 
    return {
        next() {
            if (count < a) {
                count++;
                return {
                    value: curr++, 
                    done: false    
                };
            }
            return {
                done: true
            };
        },
        [Symbol.iterator]() {
            return this;
        }
    };
}
const a = 13; 
const iterator = customItr(a);

for (const val of iterator) {
    console.log(val);
}
