import { Celsius } from '~/components'
import { shallow } from 'enzyme'
import { expect } from 'chai'

describe('<Celsius />', () => {
	it('displays the correct value', () => {
		const component = <Celsius temp={285.57} />
		const wrapper = shallow(component)

		expect(wrapper.find('[data-id="value"]').text()).to.equal('12')
	})
})