import React from 'react';
// import logo from './logo.svg';
import './App.css';

/**----------------------------------------- */
// class Counter extends React.Component {
// 	state = {
// 		count: 0,
// 	};

// 	handleClick = () => {
// 		this.setState(({ count }) => ({
// 			count: ++count,
// 		}));
// 	};

// 	render() {
// 		return (
// 			<>
// 				<h2>{this.state.count}</h2>
// 				<button onClick={this.handleClick}>+1</button>
// 			</>
// 		);
// 	}
// }

/**----------------------------------------- */
//Typeing class component - we again use generic types (<>)
/**
 * 1 generics is props typeing
 * 2 generics is state typeing
 */
// class Counter extends React.Component<{}, { count: number }> {
// 	state = {
// 		count: 0,
// 	};

// 	handleClick = () => {
// 		this.setState(({ count }) => ({
// 			count: ++count,
// 		}));
// 	};

// 	render() {
// 		return (
// 			<>
// 				<h2>{this.state.count}</h2>
// 				<button onClick={this.handleClick}>+1</button>
// 			</>
// 		);
// 	}
// }

/**----------------------------------------- */

//# if the number of these values increases, then the best option is to create separate types

//Without type we can use interface, for more opportunities (example interfaces can extend from another interface)

//by default state is read-only but in props we can specify readonly modificator
// type CounterState = {
// 	count: number;
// };

// type CounterProps = {
// 	//after  this field will give error, because it we must transfer to our compnent or we can specify it as optional (?)
// 	title: string;
// };

// class Counter extends React.Component<CounterProps, CounterState> {
// 	//# when use constructor
// 	// constructor(props) {//error
// 	// Here we props are typeing 2 time, in generic type and in constructor.
// 	constructor(props: CounterProps) {
// 		super(props);
// 		this.state = {
// 			count: 0,
// 		};
// 	}

// 	//# when not use constructor
// 	// state = {
// 	// 	count: 0,
// 	// };

// 	//# Default props ts+react
// 	static defaultProps: CounterProps = {
// 		title: 'this is my default props :)',
// 	};

// 	handleClick = () => {
// 		this.setState(({ count }) => ({
// 			count: ++count,
// 		}));
// 		// this.state.count = 1; // Cannot assign to 'count' because it is a read-only property.
// 	};

// 	render() {
// 		// this.props.title = 'another text'; // default alredy read-only to like state, not need specify readonly modificator -  give warning becase in above (type CounterProps) we specify props (title field) as readonly
// 		return (
// 			<>
// 				<h2>{this.state.count}</h2>
// 				<h3>{this.props.title}</h3>
// 				<button onClick={this.handleClick}>+1</button>
// 			</>
// 		);
// 	}
// }

/**------------------- Typeing of lifecycle ---------------------- */

type CounterState = {
	count: number;
};

type CounterProps = {
	title: string;
};

class Counter extends React.Component<CounterProps, CounterState> {
	//# when not use constructor
	state = {
		count: 0,
	};

	//# Default props ts+react
	static defaultProps: CounterProps = {
		title: 'this is my default props :)',
	};

	handleClick = () => {
		this.setState(({ count }) => ({
			count: ++count,
		}));
	};

	/**
	 * typing these methods (lifecycles) is not difficult because these are ordinary functions and all we need to do is << describe the arguments>> and << the returned result >>
	 */

	/**
	 * getDerivedStateFromProps
      is invoked right before calling the render method
      It should return an object to update the state, or null to update nothing.
	 */

	//# << describe the arguments>>
	// static getDerivedStateFromProps(props: CounterProps, state: CounterState) {}

	// componentDidMount() {}

	// shouldComponentUpdate(nextProps: CounterProps, nextState: CounterState) {
	// 	return true;
	// }

	//# << the returned result >>
	//getDerivedStateFromProps - It should return an object to update the state, or null to update nothing.
	static getDerivedStateFromProps(props: CounterProps, state: CounterState): CounterState | null {
		return true ? { count: 2 } : null; //get rid of warning
	}

	// componentDidMount - returns nothing and accepts nothing but serves for some additional calculations before the final rendering, for this we just use void
	// componentDidMount() {}
	componentDidMount(): void {
		//void - no return data
	}

	// shouldComponentUpdate - based on internal calculations, determines whether the component should be updated or not. its always return boolean value
	shouldComponentUpdate(nextProps: CounterProps, nextState: CounterState): boolean {
		return true;
	}

	render() {
		return (
			<>
				<h2>{this.state.count}</h2>
				<h3>{this.props.title}</h3>
				<button onClick={this.handleClick}>+1</button>
			</>
		);
	}
}

function App() {
	// return <Counter title="This is my title with CounterProps" />;
	return <Counter />; //when we not specify title work our default props whcih we define in Counter component
}

export default App;
