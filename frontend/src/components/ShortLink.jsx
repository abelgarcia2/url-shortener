import toast, { Toaster } from 'react-hot-toast';
function ShortLink(props) {
	const domain = 'urlshortener-abelgarcia2.herokuapp.com/';
	const copyLinkToClipboard = () => {
		navigator.clipboard.writeText(domain + props.url);
		toast('Copied!!');
	};

	const propsIsEmpty = () => {
		if (props.url !== '' && props.url !== undefined) {
			return (
				<div className='result'>
					<a href={props.url} target='_blank' rel='noreferrer'>
						{domain + props.url}
					</a>
					<button onClick={copyLinkToClipboard} className='copyClipboard'>
						Copy!
					</button>
					<Toaster />
				</div>
			);
		} else {
			return '';
		}
	};
	return propsIsEmpty();
}

export default ShortLink;
