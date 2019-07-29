import React from 'react'

export default function Page404NotFound(props) {
	const currentUrl = props.location.pathname
	return (
		<div>
			<h1>Error 404</h1>
			<p>OOPS! Could not find "{`${currentUrl}`}"!</p>
		</div>
	)
}
