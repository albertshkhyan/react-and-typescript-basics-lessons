import React from 'react';
// import logo from './logo.svg';
import './App.css';

/*****************************Typeing of Events ****************************/
/**
 * events in react are not just events in their classical sense, they use their own wrapper, the so-called Syntetic-Event. This is necessary for better cross-browser compatibility. 
 And since such a wrapper exists, then for this setting, special event types were developed.
	Full list of event types
		- DragEvent
		- FormEvent
		- mouseEvent
		- TouchEvent
		- WheelEvent
		- FocusEvent
		- ChangeEvent
		- PointerEvent
		- KeyboardEvent
		- AnimationEvent
		- ClipboardEvent
		- TransitionEvent
		- CompositionEvent

		But we will use the most basics

 */
//# PREVIOUS EXAMPLE

type CounterState = {
	count: number;
};

type CounterProps = {
	title?: string;
};

class Counter extends React.Component<CounterProps, CounterState> {
	//# when not use constructor
	state = {
		count: 0,
	};

	/*
	* no give error withour parameter
	handleClick = () => {
		this.setState(({ count }) => ({
			count: ++count,
		}));
	};
	*/

	// handleClick = (e) => {//🚫⚠ Error
	// 	this.setState(({ count }) => ({
	// 		count: ++count,
	// 	}));
	// };

	/*
	 * when we set parameter  at the compilation stage we get an error we need to define the type of event
	 */
	//#Variant 1
	// handleClick = (e: React.SyntheticEvent) => {
	/**e: React.SynteticEvent - this is a perfectly valid case, however the typing itself is a bit vague(not specific).
	 * React.SyntheticEvent -> React.Mouseevent
	 */
	// handleClick = (e: React.MouseEvent) => {
	// 	console.log('e', e.clientX, e.clientY); //print the click coordinates to the console (use e variable)
	// 	this.setState(({ count }) => ({
	// 		count: ++count,
	// 	}));
	// };

	//#Variant 2
	/** # Restrictive Event Handling
	 * * we can also type the element on which events are triggered
		* for this task is used generic html + element type
			React.MouseEvent<here we specidy the element on whcih work our event>
				React.MouseEvent<HTMLButtonElement> - we indicate the type of element on which we catch this event.
					⚠ When we try add handleCick(event handler) on another element (example link)
						<a href="http://re.zm/or" onClick={this.handleClick}></a> ❌

	 */
	// handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
	// 	console.log('e', e.clientX, e.clientY); //print the click coordinates to the console (use e variable)
	// 	this.setState(({ count }) => ({
	// 		count: ++count,
	// 	}));
	// };

	//#Variant 3
	/**
	 * * in order to add support for both elements we need to extend our generic
	 *  React.MouseEvent<HTMLButtonElement or(|)  >
			 React.MouseEvent<HTMLButtonElement | HTMLAnchorElement> - For like this manipulation used @types/react-dom
			 🙄☝ see how accurately we can type events. Not only do we determine the type of the event itself, we also determine and control the type of the element.	

	 */
	handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
		console.log('e', e.clientX, e.clientY); //print the click coordinates to the console (use e variable)
		this.setState(({ count }) => ({
			count: ++count,
		}));
	};
	static getDerivedStateFromProps(props: CounterProps, state: CounterState): CounterState | null {
		return true ? { count: 2 } : null; //get rid of warning
	}

	componentDidMount(): void {}

	shouldComponentUpdate(nextProps: CounterProps, nextState: CounterState): boolean {
		return true;
	}

	render() {
		return (
			<>
				<h2>{this.state.count}</h2>
				<h3>{this.props.title}</h3>
				<button onClick={this.handleClick}>+1</button>
				{/**Error:  in below example: React.MouseEvent<HTMLButtonElement>*/}
				{/* <a href="http://re.zm/or" onClick={this.handleClick}></a> */}
				{/**OK: Suport event handler button and anchor element*/}
				<a href="http://re.zm/or" onClick={this.handleClick}>
					Some link
				</a>
			</>
		);
	}
}

function App() {
	return <Counter />;
}

export default App;
