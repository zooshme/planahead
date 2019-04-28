import AppHeader from './AppHeader'

const Layout = ({ children }) => (
	<div>
		<AppHeader />
		{children}
	</div>
)

export default Layout