function calculateSum(...args){
    let sum=0
    for(let i=0;i<args.length;i++){
       sum+=args[i]; 
    }
    return sum
}
console.log(calculateSum(10,20,30,40))