let sym1 = Symbol.for('globalSymbol');
let sym2 = Symbol.for('globalSymbol');
console.log(sym1===sym2)
console.log(sym1.description)
console.log(sym2.description)
let s1 = Symbol("unique")
let s2 = Symbol("unique")
console.log(s1 === s2)
