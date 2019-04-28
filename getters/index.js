export function groupByDate(list = []) {
    return list.reduce((acc, { dt_txt, ...rest  }) => {
        const date = new Date(dt_txt)
        const formattedDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
        const value = acc[formattedDate] ? [...acc[formattedDate], {dt_txt, ...rest}] : [{dt_txt, ...rest}]
        
        return { 
            ...acc,
            [formattedDate]: value
        }
    }, {})
}

export function convertKelvinToCelsius(kelvin) {
	if (kelvin < (0)) {
		return 'below absolute zero (0 K)';
	} else {
		return (kelvin-273.15);
	}
}