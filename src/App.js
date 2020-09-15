import React from 'react';

import './App.css';

function App() {
	return (
		<div className="container bg-primary">
			<h1 className="text-center">Random Quote Machine</h1>
			<div id="quote-box" className="card text-center">
				<p id="text">Quote goes here</p>
				<p id="author">Author goes here</p>
				<div className="">
					<button id="tweet-quote" className="btn">Tweet quote</button>
					<button id="new-quote" className="btn">New Quote</button>
				</div>
			</div>
			<footer>
				<p>Created by <a href=""></a>Matthew Wessel</p>
				<p id="socials">Socials Go here</p>
			</footer>
		</div>
	);
}

export default App;
