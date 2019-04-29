import { FC } from 'react'

export interface IStatelessPage<P = {}> extends FC<P> {
	getInitialProps?: (ctx:any) => Promise<P>;
}