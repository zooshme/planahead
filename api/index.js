import axios from 'axios'

export async function fetchWeather({ city, country }) {
    try {
        const response = await axios.get('https://api.openweathermap.org/data/2.5/forecast', {
            params: {
                q: `${city},${country}`,
                mode: 'json',
                appid: process.env.OPEN_WEATHER_MAP_TOKEN
            }
        })
        const { data } = response
        console.log('data from api', data)
        return { data, error: null }
    } catch(error) {
        return { error }
    }
}