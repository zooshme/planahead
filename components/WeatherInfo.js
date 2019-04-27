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
    rain,
    snow
}) => {
        return (
            <div>
                <img src={`http://openweathermap.org/img/w/${icon}.png`} />
                {temp}  
                <span>{weatherMain} - {description}</span>
                <span>{speed} {deg}</span>
                <span>{cloudsAll}</span>
                {rain && (<span>{rain['3h']}</span>)}
                {snow && (<span>{snow['3h']}</span>)}
            </div>
        )
    }

export default WeatherInfo