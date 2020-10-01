import React, { useState, useEffect } from 'react';

import './scss/style.scss';

function App() {
	const [quote, setQuote] = useState('');
	const [author, setAuthor] = useState('');

	useEffect(() => {
		fetchQuote();
	}, []);

	const quoteURL = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';

	const fetchQuote = () => {
		fetch(quoteURL)
			.then((response) => response.json())
			.then((json) => {
				let randNum = () => Math.floor(Math.random() * 10);
				let quote = json.quotes[randNum()];
				setQuote(quote.quote);
				setAuthor('- ' + quote.author);
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
						<i className='fab fa-linkedin fa-2x'></i>
					</a>
					<a
						href='https://github.com/nucmatt'
						target='_blank'
						rel='noreferrer noopener'
					>
						<i className='fab fa-github fa-2x'></i>
					</a>
					<a
						href='https://www.freecodecamp.org/nucmatt'
						target='_blank'
						rel='noreferrer noopener'
					>
						<i className='fab fa-free-code-camp fa-2x'></i>
					</a>
				</p>
			</footer>
		</div>
	);
}

export default App;
