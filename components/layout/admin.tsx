import React, { ReactNode } from 'react'

type AdminProps = {
	children: ReactNode
}

export function AdminLayout({ children }: AdminProps) {
	return (
		<>
			<div>Admin Layout</div>
			<div>{children}</div>
		</>
	)
}
