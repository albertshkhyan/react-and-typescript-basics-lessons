import React from 'react';
// import logo from './logo.svg';
import './App.css';

//# Typeing of functional component - define as component
// const Title: React.FunctionComponent = () => <h1>Hello World</h1>
//or
// const Title: React.FC = () => <h1>Hello World</h1>
//if we will remove return jsx of Title component
// const Title: React.FC = () => {}//Error - functional component always must return something

/**------------------------------------------ */
//Typescript React.FC<Props> - typeing of props
// const Title: React.FC<{text: string}> = ({text}) => {
//   return <h1>{text}</h1>
// }

/**------------------------------------------ */
//# we can not type the children props, but we can also typeing the children
// const Title: React.FC<{ text: string }> = ({ text, children }) => {
// 	return (
// 		<h1>
// 			{text}
// 			{children}
// 		</h1>
// 	);
// };

/**------------------------------------------ */

/* There are 2 options to describe props
    1.Using generic types - React.FC<text: string> - if we will have props a lot of. It will not be very beautiful.

    2. More optimal variant use interfaces or types.
     Interface gives more opportunities
        
    Generics types have own individual features
*/

//1. With type keyword do typeing
//in this case we not specify React.FC<>, it not need when we use type

// type TitleProps = {
// 	text: string;
// 	age?: number;
// };

// //# const Title: React.FC<{ text: string }> = ({ text, children }) => {
// //# const Title = ({ text, children }: TitleProps) => {
// //# with children not work -because in TitleProps we not have children key
// // const Title = ({ text }: TitleProps) => {
// //# or use like this - more readable - props
// // const Title = (props: TitleProps) => {
// //# default value - v1
// const Title = ({ text, age = 20 }: TitleProps) => {
// 	return (
// 		<h1>
// 			{text}
// 			{/* {props.text} */}
// 			{/* {children} */}
// 		</h1>
// 	);
// };

/**------------------------------------------ */
//# type and children together
type TitleProps = {
	text: string;
	age?: number;
};

const Title: React.FC<TitleProps> = ({ text, children }) => {
	return (
		<h1>
			{text}
			{children}
		</h1>
	);
};

function App() {
	return <Title text="hello world" />;
}

export default App;
