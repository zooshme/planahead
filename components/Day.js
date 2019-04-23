import { variables, rem } from '~/shared'

const Day = ({ className, day }) => (
	<div className={`day ${className}`}>
		<h3 className="title">{day}</h3>
		<style jsx>{`
			.day {
				flex: 1;
			}
			.title {
				font-family: ${variables.headingFont};
				font-weight: 600;
				text-transform: uppercase;
				font-size: ${rem(26)};
				line-height: ${rem(30)};
			}	
		`}</style>
	</div>
)

export default Day