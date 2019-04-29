import axios from 'axios'

export function fetchWeather({ city, country, environment }) {
    const url = environment === 'production' 
        ? '//api'
        : 'http://localhost:4000/api'
    return axios.get(url, {
        params: { city, country }
    })
}