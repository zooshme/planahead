import React from 'react'
import css from 'styled-jsx/css'

import { rem } from '~/shared'
import Container from './Container'
import Logo from './Logo'
import LocationForm from './LocationForm'

const AppHeader: React.StatelessComponent<{}> = () => {
	const {className, styles} = css.resolve`
		.container {
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
	`

	return (
		<div className="app-header">
			<Container className={className}>
				<Logo />

				<LocationForm />
			</Container>
			{styles}
			<style jsx>{`
				.app-header {
					padding: ${rem(20)};
				}	
			`}</style>
		</div>
	)
}

export default AppHeader