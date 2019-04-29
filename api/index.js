import axios from 'axios'

export function fetchWeather({ city, country }) {
    return axios.get('https://api.planahead.app', {
        params: { city, country }
    })
}