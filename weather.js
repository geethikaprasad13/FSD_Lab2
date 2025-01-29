async function getWeather() {
    try {
        let rawData = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=28.6139&lon=77.2090&appid=ff97de2dfe7792e8dec0fd8ea301b3b4");
        let data = await rawData.json();
        
        let { country } = data.sys;
        let { name } = data;
        let { temp, temp_min, temp_max, humidity } = data.main;

        console.log(`Country: ${country},\nLocation: ${name}`);
        console.log(`Minimum temperature: ${temp_min},\nMaximum temperature: ${temp_max},\nHumidity: ${humidity}\n`);

        const chartData = {
            labels: ['Current Temp', 'Min Temp', 'Max Temp'],
            datasets: [{
                label: 'Temperature (K)',
                data: [temp, temp_min, temp_max],  
                borderColor: 'rgb(0, 0, 0)',
                backgroundColor: ['rgb(243, 239, 7)', 'rgb(226, 39, 25)','rgb(18, 230, 18)'],
                fill: true,
                tension: 0.1
            }]
        };
        createChart(chartData);

        function createChart(data) {
            const ctx = document.getElementById('weatherChart').getContext('2d');
            new Chart(ctx, {
                type: 'bar',
                data: data,
                options: {
                    responsive: false,
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        }
    } catch (error) {
        console.log("Error fetching data from:", error);
    }
}
getWeather();
