import { variables, rem } from '~/shared'

const Logo = () => (
	<span className="logo">
		Plan Ahead
		
		<style jsx>{`
			.logo {
				font-family: ${variables.headingFont};
				font-weight: 600;
				text-transform: uppercase;
				font-size: ${rem(26)};
				line-height: ${rem(30)};
			}
		`}</style>
	</span>
)

export default Logo