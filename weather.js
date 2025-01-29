async function getWeather() {
    try{
        let rawData = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=28.6139&lon=77.2090&appid=ff97de2dfe7792e8dec0fd8ea301b3b4");
        let data = await rawData.json();
        let { country } = data.sys
        let { name } = data
        let { temp_min, temp_max, humidity } = data.main;
        console.log(`Country: ${country},\nLocation: ${name}`)
        console.log(`Minimum temperature:${temp_min},\nMaximum temperature:${temp_max},\nHumidity:${humidity}\n`);
    }
    catch(error){
        console.log("Error fetching data from:",error)
    }
}
getWeather();