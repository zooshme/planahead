const WeatherInfo = ({ 
    main: { 
        temp, 
        temp_min, 
        temp_max, 
        pressure, 
        sea_level, 
        grnd_level, 
        humidity, 
        temp_kf 
    }, 
    weather: [{
        id, 
        main: weatherMain, 
        description, 
        icon 
    }], 
    clouds: { all: cloudsAll }, 
    wind: { speed, deg }, 
    rain
}) => {
        return (
            <div>
                {temp}  
                <span>{weatherMain} - {description}</span>
                <span>{speed} {deg}</span>
                <span>{rain && rain['3h']}</span>
            </div>
        )
    }

export default WeatherInfo