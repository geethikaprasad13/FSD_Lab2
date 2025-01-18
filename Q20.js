function customItr(arr) {
    let count = arr.length - 1;  
    return {
        next() {
            if (count >= 0) {
                return {
                    value: arr[count--], 
                    done: false          
                };
            } else {
                return { done: true };   
            }
        },
        reset() {
            count = arr.length - 1; 
        },                                        
        [Symbol.iterator]() {
            return this; 
        }
    };
}
const arr = [1, 2, 3, 4];
const iterator = customItr(arr);
for (const val of iterator) {
    console.log(val); 
}
iterator.reset();
for (const val of iterator) {
    console.log(val); 
}
