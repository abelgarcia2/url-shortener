import { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';
import ShortLink from './ShortLink';
function LongLink() {
	const [link, setLink] = useState('');
	const [res, setRes] = useState('');
	const url = '/api/shorten';

	const handleClick = async () => {
		const response = await axios.post(url, { url: link });
		setRes(await response.data.code);
	};

	const handleChange = (e) => {
		setLink(e.target.value);
	};

	return (
		<div>
			<input type='text' onChange={handleChange} />
			<button onClick={handleClick}>Short link!</button>
			<ShortLink url={res} />
		</div>
	);
}

export default LongLink;
