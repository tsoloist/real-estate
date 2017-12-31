import React, {Component} from 'react';
import './InfoCard.css'

const infoCard = (props) => {
		return(
			<div className="InfoCard">
				<button>{props.title}</button>
				<div>
					<p>Some content that will be toggleable.</p>
				</div>
				
			</div>
		);
}


export default infoCard;