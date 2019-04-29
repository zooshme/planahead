import { IWeatherInfo } from '~/components/WeatherInfo'

const weatherInfo: IWeatherInfo  = {
	main: {
		temp: 0,
		temp_min: 0,
		temp_max: 0,
		pressure: 0,
		sea_level: 0,
		grnd_level: 0,
		humidity: 0,
		temp_kf: 0
	},
	weather: [{
		id: '',
		main: 'Clouds',
		description: 'broken clouds',
		icon: ''
	}],
	clouds: {
		all: 0
	},
	wind: {
		speed: 0,
		deg: 0
	},
	rain: {
		['3h']: 0
	},
	snow: {
		['3h']: 0
	}
}

export default weatherInfo