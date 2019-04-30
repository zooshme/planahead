import { Celsius, WeatherDetails } from '~/components'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import { weatherDetails } from '../fixtures'

describe('<WeatherDetails />', () => {
	it('renders <Celsius />', () => {
        const component = <WeatherDetails {...weatherDetails} />
        const wrapper = shallow(component)

        expect(wrapper.find(Celsius)).to.have.lengthOf(1)
    })
    it('renders icon', () => {
        const component = <WeatherDetails {...weatherDetails} />
        const wrapper = shallow(component)
        const element = wrapper.find('[data-id="icon"]')
        const ICON_PATH = 'http://openweathermap.org/img/w/04d.png'

        expect(element).to.have.lengthOf(1)
        expect(element.prop('src')).to.equal(ICON_PATH)
    })
	it('renders description', () => {
        const component = <WeatherDetails {...weatherDetails} />
		const wrapper = shallow(component)
		const element = wrapper.find('[data-id="description"]')
		
		expect(element).to.have.lengthOf(1)
        expect(element.text()).to.equal('overcast clouds')
	})
})