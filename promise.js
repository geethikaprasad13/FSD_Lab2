function getData(){
    let req = new XMLHttpRequest()
    req.onreadystatechange = function(){
        if(this.readyState==4 && this.status==200){
            console.log(this.responseText)
        }
    }
    req.open("GET","data.json",true)
    req.send()
}
getData();