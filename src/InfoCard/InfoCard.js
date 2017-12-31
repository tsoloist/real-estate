import React, {Component} from 'react';
import './InfoCard.css';

class InfoCard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showInfoDetails: false
		}
	}

	MoreInfoHandler = () => {
		const doesShow = this.state.showInfoDetails;
		this.setState({showInfoDetails: !doesShow});
	}

	render() {
		return(props,
			<div className="InfoCard">
				<button onClick={this.MoreInfo}>{props.title}</button>
				<div>
					{this.state.showInfoDetails ?
						props.children: null
					}
				</div>
				
			</div>
		);
	}
}


export default InfoCard;