import React from 'react';

const person = (props) => {
	return (
		<div>
		<p>I'm a person!!</p> 
		<h1>Yeah!</h1>
		<h2>trying stuff</h2>
		<p onClick={props.click}>My name is {props.name}.  I'm trying to learn {props.stuff}</p>
		<p> Oh and I'm {props.age} years old.</p>
		<div>{props.children}</div>
		</div>
		)
		
}

export default person;