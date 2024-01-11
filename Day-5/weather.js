function place(){ 
    let visit = document.getElementById('city').value
    console.log(visit)
    let p = fetch("http://api.weatherapi.com/v1/current.json?key=a18d009f33eb473d9c9175805231912&q=${visit}&aqi=no");
   
    p.then(response =>{
       if (!response.ok) {
           console.log("Error encountered")
       }
       console.log(response.status);
       return response.json();
    })
    .then(data => {
       console.log(data);
       updateHtml(data)
    })
   }
      
function updateHtml(data) {
    const dataContainer = document.getElementById('data-container');
    dataContainer.innerHTML = '';

    // Extract data from the API response
    const location = data.location;
    const currentWeather = data.current;

    // Create elements to display current weather information
    const weatherCard = document.createElement('div');
    weatherCard.classList.add('weather-card');

    const temperatureElement = document.createElement('p');
    temperatureElement.textContent = `Temperature: ${currentWeather.temp_c} °C`;

    const lastUpdatedElement = document.createElement('p');
    lastUpdatedElement.textContent = `Last Updated: ${currentWeather.last_updated}`;

    // Add more elements as needed based on your API response

    weatherCard.appendChild(temperatureElement);
    weatherCard.appendChild(lastUpdatedElement);

    // Append the weather card to the data container
    dataContainer.appendChild(weatherCard);
}
