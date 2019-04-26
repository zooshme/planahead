import { get } from 'axios'

export async function fetchWeather({ city, country }) {
    try {
        const response = await get('api.openweathermap.org/data/2.5/forecast', {
            params: {
                q: `${city},${country}`,
                mode: 'json',
                appid: process.env.OPEN_WEATHER_MAP_TOKEN
            }
        })
        const { data } = response
        return data
    } catch(err) {
        return { err }
    }
}