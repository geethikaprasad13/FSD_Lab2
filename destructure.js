function destructuring(user){
    let {name, city}=user
    console.log('name:'+name+', city:'+city)
}
const user = {name: 'ABC', age: 30, city: 'hyd', country: 'IND' };
destructuring(user)
