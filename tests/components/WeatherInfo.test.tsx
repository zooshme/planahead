import { WeatherInfo, Celsius } from '~/components'
import { shallow } from 'enzyme'
import { weatherDetails } from '../fixtures'
import { expect } from 'chai'

describe('<WeatherInfo />', () => {
    it('renders <Celsius />', () => {
        const component = <WeatherInfo {...weatherDetails.weather[0]} temp={weatherDetails.main.temp} />
        const wrapper = shallow(component)

        expect(wrapper.find(Celsius)).to.have.lengthOf(1)
    })
    it('renders icon', () => {
        const component = <WeatherInfo {...weatherDetails.weather[0]} temp={weatherDetails.main.temp} />
        const wrapper = shallow(component)
        const element = wrapper.find('[data-id="icon"]')
        const ICON_PATH = 'http://openweathermap.org/img/w/04d.png'

        expect(element).to.have.lengthOf(1)
        expect(element.prop('src')).to.equal(ICON_PATH)
    })
	it('renders description', () => {
        const component = <WeatherInfo {...weatherDetails.weather[0]} temp={weatherDetails.main.temp} />
		const wrapper = shallow(component)
		const element = wrapper.find('[data-id="description"]')
		
		expect(element).to.have.lengthOf(1)
        expect(element.text()).to.equal('overcast clouds')
	})

})