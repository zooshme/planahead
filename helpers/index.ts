export function convertKelvinToCelsius(kelvin: number): number {
	if (kelvin < (0)) {
		return kelvin
	} else {
		return (kelvin-273.15);
	}
}