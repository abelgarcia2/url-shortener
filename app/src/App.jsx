import React from 'react';
import LongLink from './components/LongLink';

function App() {
	return (
		<main>
			<h1>Free URL shortener</h1>
			<div>
				This shortener takes you long link and return one more easy to read
			</div>
			<LongLink />
		</main>
	);
}

export default App;
