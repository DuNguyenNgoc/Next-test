import { LayoutProps } from '@/models'
import React, { ReactNode } from 'react'

export function MainLayout({ children }: LayoutProps) {
	return (
		<>
			<div>Main Layout</div>
			<div>{children}</div>
		</>
	)
}
