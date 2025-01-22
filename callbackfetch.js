function fetchDataWithCallback(callback) {
    setTimeout(() => {
        const a = Math.floor(Math.random()*100)
        const success = a < 10; 
        if (success) {
            callback(null, `Fetched data successfully! ${a}` );
        } else {
            callback(`Failed to Fetch data ${a}`, null);
        }
    }, 2000);  
}
fetchDataWithCallback((error, response) => {
    if (error) {
        console.log("Callback received an error:", error);
    } else {
        console.log("Callback received data:", response);
    }
});
