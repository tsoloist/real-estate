import React from 'react';
import './InfoCard.css';
import Header from '../Header.js';

const infoCard = (props) => {
		return(
			<div className="InfoCard">
				<button style={props.style} onClick={props.click}>{props.title}</button>
				<div>
					{props.children}
				</div>
				
			</div>
		);
}


export default infoCard;