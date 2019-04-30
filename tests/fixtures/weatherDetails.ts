import { IWeatherDetails } from '~/interfaces'

const weatherDetails: IWeatherDetails  = {
    "dt":1556614800,
    "main":{
        "temp":285.57,
        "temp_min":284.267,
        "temp_max":285.57,
        "pressure":1021.99,
        "sea_level":1021.99,
        "grnd_level":1007.13,
        "humidity":76,
        "temp_kf":1.31
    },
    "weather":[
        {
            "id":804,
            "main":"Clouds",
            "description":"overcast clouds",
            "icon":"04d"
        }
    ],
    "clouds":{
        "all":98
    },
    "wind":{
        "speed":2.69,
        "deg":156.184
    },
    "sys":{
        "pod":"d"
    },
    "dt_txt":"2019-04-30 09:00:00"
}

export default weatherDetails