import { Fragment } from 'react'
import Link from 'next/link'

import { vars, rem } from '~/shared'

const Logo = () => (
    <Fragment>
        <Link href="/">
            <a className="logo">Plan Ahead</a>
            
        </Link>

        <style jsx>{`
            .logo {
                color: ${vars.black};
                font-family: ${vars.headingFont};
                font-weight: 600;
                text-transform: uppercase;
                font-size: ${rem(26)};
                line-height: ${rem(30)};
                text-decoration: none;
            }
        `}</style>
    </Fragment>
		
)

export default Logo