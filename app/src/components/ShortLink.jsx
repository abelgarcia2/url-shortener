function ShortLink(props) {
	const domain = 'urlshortener-abelgarcia2.herokuapp.com/';
	const copyLinkToClipboard = () => {
		navigator.clipboard.writeText(domain + props.url);
	};

	const propsIsEmpty = () => {
		if (props.url !== '' && props.url !== undefined) {
			return (
				<div className='result'>
					<a href={domain + props.url} target='_blank' rel='noreferrer'>
						{domain + props.url}
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
