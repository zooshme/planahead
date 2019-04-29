import WeatherInfo from '~/components/WeatherInfo'
import { shallow } from 'enzyme'
import { weatherInfo } from '../fixtures'
import { expect } from 'chai'

describe('<WeatherInfo />', () => {
	it('renders', () => {
		const wrapper = shallow(<WeatherInfo {...weatherInfo} />)
		const element = wrapper.find('[data-id="description"]')
		
		expect(element.length).to.equal(1)
		expect(element.text()).to.equal('broken clouds')
	})

})