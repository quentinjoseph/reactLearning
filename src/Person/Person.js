import React from 'react';
import './Person.css';


const person = (props) => {
  // const style = {
  //   '@media (max-width: 768px)':{
  //     'width':'85%',
  //     'margin': 'auto'
  //   }
  // };
	return (
    <div  className="Person">
		<p>I'm a person!!</p> 
			{/* <button onClick={props.click} >Switch Stuff</button> */}
      <p onClick={props.click}>My name is {props.name}.  I'm trying to learn {props.stuff}</p>
		<p> Oh and I'm {props.age} years old.</p>
		<div>{props.children}</div>
		<input type="text" onChange={props.changed} value={props.name}/>
		</div>
		)
		
}

export default person;