import React, { useState } from 'react';

import './App.css';

function App() {
	const [quote, setQuote] = useState('Stateful quote!');
	const [author, setAuthor] = useState('Stateful author!');

	const quoteURL = 'http://quotes.stormconsultancy.co.uk/random.json';

	// 'http://api.forismatic.com/api/1.0/method=getQuote&format=text&lang=en';

	// let data = {};

	const fetchQuote = () => {
		fetch(quoteURL)
			.then((response) => response.json())
			.then((json) => {
				setQuote(json.quote);
				setAuthor(json.author);
			});
	};

	return (
		<div className='container bg-primary'>
			<h1 className='text-center'>Random Quote Machine</h1>
			<div id='quote-box' className='card text-center'>
				<p id='text'>{quote}</p>
				<p id='author'>{author}</p>
				<div className=''>
					<button id='new-quote' className='btn p' onClick={() => fetchQuote()}>
						New Quote
					</button>
					<button id='tweet-quote' className='btn p'>
						Tweet quote
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
				<p id='socials'>Socials Go here</p>
			</footer>
		</div>
	);
}

export default App;
