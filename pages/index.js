import { Container, Layout, Day, Row } from '../components'

export default () => (
	<Layout>
		<Container>
			<Row>
				{['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map( day => <Day day={day} />)}
			</Row>
		</Container>
	</Layout>
)