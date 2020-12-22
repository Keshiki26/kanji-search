import React from 'react';
import { BrowserRouter as Router, Link, useLocation } from 'react-router-dom';

export default function QueryParamsExample() {
	return (
		<Router>
			<QueryParamsDemo />
		</Router>
	);
}

// A custom hook that builds on useLocation to parse
// the query string for you.
function useQuery() {
	return new URLSearchParams(useLocation().search);
}

function QueryParamsDemo() {
	let query = useQuery();

	return (
		<div>
			<div>
				<Child name={query.get('name')} />
			</div>
		</div>
	);
}

function Child({ name }) {
	console.log(name);
	return (
		<div>
			{name ? (
				<h3>
					The <code>name</code> in the query string is &quot;{name}
					&quot;
				</h3>
			) : (
				<h3>There is no name in the query string</h3>
			)}
		</div>
	);
}
