import axios from 'axios'

export function fetchWeather({ city, country }) {
    return axios.get('http://localhost:4000/api/forecast/5', {
        params: { city, country }
    })

}