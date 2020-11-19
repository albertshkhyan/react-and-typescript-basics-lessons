import React from 'react';
// import logo from './logo.svg';
import './App.css';

/*****************************Typeing of Events ****************************/
/* -------------------------------------------------------------------------- */
/*                               WORK WITH FORMS                              */
/* -------------------------------------------------------------------------- */

class Form extends React.Component<{}, {}> {
	//# variant 1
	// handleFocus = (e) => {//❌
	// handleFocus = (e: React.FocusEvent) => {
	//* specify the element on which the events are triggered. ☝⚠ When we do specific typeing autocomplete work better.
	handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
		console.log('e.currentTarget', e.currentTarget); //<input type="text" name="text">
	};

	//# varaint  2
	/**
	 * * React.ClipboardEvent - this type of event describes operations copy, cut and paste.
	 * onCopy event
	 */

	handleCopy = (e: React.ClipboardEvent<HTMLInputElement>) => {
		console.log('Coppied!');
	};
	handlSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log('Submitted!');
	};

	/**
	 * * similarly, some types of events have their own unique properties for example:
	 * KeyboardEvent -  store information about the pressed button.
	 * ☝⚠ Fox access on all propeties, need do typeing exactly(specific).
	 */
	render() {
		return (
			<form onSubmit={this.handlSubmit}>
				<label htmlFor="">
					Simple Text
					<input onCopy={this.handleCopy} onFocus={this.handleFocus} type="text" name="text" />
				</label>
				<button type="submit">Submit</button>
			</form>
		);
	}
}

function App() {
	return <Form />;
}

export default App;
