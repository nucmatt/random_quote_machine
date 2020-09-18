import React, { useState, useEffect } from 'react';

import './scss/style.scss';

function App() {
	const [quote, setQuote] = useState('');
	const [author, setAuthor] = useState('');

	useEffect(() => {
		fetchQuote();
	}, []);

	const quoteURL = 'http://quotes.stormconsultancy.co.uk/random.json';

	const fetchQuote = () => {
		fetch(quoteURL)
			.then((response) => response.json())
			.then((json) => {
				setQuote(json.quote);
				setAuthor('- ' + json.author);
			});
	};

	return (
		<div className='container bg-primary'>
			<h1 className='text-center'>Random Quote Machine</h1>
			<div id='quote-box' className='card bg-success'>
				<p id='text' className='lead text-left'>
					{quote}
				</p>
				<p id='author' className='text-right'>
					{author}
				</p>
				<div className='buttons my'>
					<a href='twitter.com/intent/tweet' id='tweet-quote' className='p'>
						<i className='fab fa-twitter-square fa-2x'></i>
					</a>
					<button id='new-quote' className='btn' onClick={() => fetchQuote()}>
						New Quote
					</button>
				</div>
			</div>
			<footer>
				<p>
					Created by{' '}
					<a
						href='https://www.matthew-a-wessel.dev'
						target='_blank'
						rel='noreferrer noopener'
					>
						Matthew Wessel
					</a>
				</p>
				<p id='socials'>
					<a
						href='https://www.linkedin.com/in/matthew-a-wessel'
						target='_blank'
						rel='noreferrer noopener'
					>
						<i class='fab fa-linkedin fa-2x'></i>
					</a>
					<a
						href='https://github.com/nucmatt'
						target='_blank'
						rel='noreferrer noopener'
					>
						<i class='fab fa-github fa-2x'></i>
					</a>
					<a
						href='https://www.freecodecamp.org/nucmatt'
						target='_blank'
						rel='noreferrer noopener'
					>
						<i class='fab fa-free-code-camp fa-2x'></i>
					</a>
				</p>
			</footer>
		</div>
	);
}

export default App;
