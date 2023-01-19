import React, { ReactNode } from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

type PrivateRouteProps = {
	children: ReactNode
}
export default function PrivateRoute({ children }: PrivateRouteProps) {

	const { isAuthenticated } = useSelector((state: any) => state.auth)
	return (
		<>
			{isAuthenticated
				? { children }
				: <Navigate to="/" />
			}
		</>
	)
}
