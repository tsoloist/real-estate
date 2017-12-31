import React from 'react';
import './InfoCard.css'

const infoCard = (props) => {
		return(
			<div className="InfoCard">
				<button onClick={this.click}>{props.title}</button>
				<div>
					{props.children}
				</div>
				
			</div>
		);
}


export default infoCard;