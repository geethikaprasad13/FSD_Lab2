function mul(num,callback){
    return callback(num*2 ,false)
}
function sub(num, callback){
    return callback(num-3, false)
}
function add(num, callback){
    return callback(num+10, false)
}

mul(13,(mulres,err)=>{
    if(!err){
        sub(mulres,(subres,err)=>{
            if(!err){
                add(subres,(addres,err)=>{
                    if(!err){
                        console.log("result: ",addres);
                    }
                    else{
                        console.log("Error in addition")
                    }
                })
            }
            else{
                console,log("Error in subtraction")
            }
        })
    }
    else{
        console.log("Error in multiplication")
    }
})