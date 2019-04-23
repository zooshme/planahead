import Logo from './Logo'
import Container from './Container'

const Layout = ({ children }) => (
	<div>
		<Container>
			<Logo />

		</Container>
		{children}
	</div>
)

export default Layout