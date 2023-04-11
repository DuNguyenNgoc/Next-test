import React, { ReactNode } from 'react'

type EmptyProps = {
	children: ReactNode
}

export function EmptyLayout({ children }: EmptyProps) {
	return (
		<>
			<div>Empty Layout</div>
			<div>{children}</div>
		</>
	)
}
