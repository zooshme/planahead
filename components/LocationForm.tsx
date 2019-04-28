import { StatelessComponent } from 'react'

const LocationForm: StatelessComponent<{}> = () => (
	<form className="form">
		<input type="text" placeholder="City" />
		<select>
			<option>Select a country</option>
			<option value="uk">United Kingdom</option>
			<option value="us">United States of America</option>
		</select>
		<input type="submit" value="Get weather" />
	</form>
)

export default LocationForm