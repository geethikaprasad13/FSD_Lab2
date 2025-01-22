function mergeUserData(ud, ua, up){
    return {...ud, ...ua, ...up}
}
const userDetails = {name: 'CVR', age: 25}
const userAddress = {address: "Mangalpally", city: 'Hyd'}
const userPreferences = {theme: "engineering", language: 'EN'}
console.log(mergeUserData(userDetails, userAddress, userPreferences))