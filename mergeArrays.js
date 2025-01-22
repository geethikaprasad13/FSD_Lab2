function mergeArrays(...args){
    let a=[].concat(...args)
    return a
}

console.log(mergeArrays([1,2],[3,4],[5,6]));