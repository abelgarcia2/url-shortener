function ShortLink(props) {
	const copyLinkToClipboard = () => {
		navigator.clipboard.writeText('http://localhost:5000/' + props.url);
	};

	const propsIsEmpty = () => {
		if (props.url !== '' && props.url !== undefined) {
			return (
				<div className='result'>
					<a
						href={'http://localhost:5000/' + props.url}
						target='_blank'
						rel='noreferrer'
					>
						{'url-shortener/' + props.url}
					</a>
					<button onClick={copyLinkToClipboard} className='copyClipboard'>
						Copy!
					</button>
				</div>
			);
		} else {
			return '';
		}
	};
	return propsIsEmpty();
}

export default ShortLink;
