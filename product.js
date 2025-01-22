function updateProductInfo(pro){
    let {id, name}={...pro}
    const res={id, name, discount : 10, inStock : true}
    return res
}
const product = {
    id: 101, 
    name: 'Laptop', 
    price: 1000, 
    category:'Electronics'
}
console.log(updateProductInfo(product))
