import { SFC } from 'react'

export interface IStatelessPage<P = {}> extends SFC<P> {
	getInitialProps?: (ctx:any) => Promise<P>;
}