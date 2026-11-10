const input = document.querySelector(".input")
const btn = document.querySelector(".btn")
const weatherInfo = document.querySelector(".weather-information")


btn.addEventListener("click", () => {

    let weatherCard = document.createElement("div")
    let h21 = document.createElement("h2")
    let h11 = document.createElement("h1")
    let p1 = document.createElement("p")
    let p2 = document.createElement("p")
    let p3 = document.createElement("p")

    weatherCard.classList.add("weather-card")
    h21.classList.add("city-name")
    h11.classList.add("temparature")
    p1.classList.add("p1")
    p2.classList.add("p2")
    p3.classList.add("p3")

    let value = input.value.trim()

    let url = `https://geocoding-api.open-meteo.com/v1/search?name=${value}&count=1`

    if (value === "") {
        console.log("plzz enter city name.")
    } else {
        weatherInfo.innerHTML = ""
        weatherInfo.textContent = "Loading weather..."
        console.log(value)

        fetch(url)
            .then(response => {
                return response.json()
            })
            .then(data => {

                console.log(data)

                if (!data.results || data.results.length === 0) {
                    console.log("City not found!")
                    weatherInfo.textContent = "City not found!"
                } else {

                    let cityName = data.results[0].name
                    let longitude = data.results[0].longitude
                    let latitude = data.results[0].latitude

                    let weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m,relative_humidity_2m,apparent_temperature`

                    return fetch(weatherUrl)
                        .then(response => {
                            return response.json()
                        })
                        .then(datas => {
                            console.log(datas)
                            let temperature = datas.current.temperature_2m
                            let relative_humidity = datas.current.relative_humidity_2m
                            let apparent_temperature = datas.current.apparent_temperature
                            let wind_speed = datas.current.wind_speed_10m
                            console.log(temperature, relative_humidity, apparent_temperature, wind_speed)

                            weatherInfo.appendChild(weatherCard)

                            h21.textContent = `cityName: ${cityName}`
                            h11.textContent = `🌡️ Temperature: ${temperature}°C`
                            p1.textContent = `💧 Humidity: ${relative_humidity}`
                            p2.textContent = `🌤️ Feels Like: ${apparent_temperature}°C `
                            p3.textContent = `💨 Wind Speed: ${wind_speed} km/h`
                            weatherCard.appendChild(h21)
                            weatherCard.appendChild(h11)
                            weatherCard.appendChild(p1)
                            weatherCard.appendChild(p2)
                            weatherCard.appendChild(p3)
                        })
                         .catch(error => {
                console.log("Error:", error)
                weatherInfo.textContent = "Something went wrong! Please try again"
            })
                        
                }
            })
           
    }
})
