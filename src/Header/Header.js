import React, {Component} from 'react';
import './Header.css';
import InfoCard from './InfoCard/InfoCard.js';
import Nav from './Nav/Nav.js';

class Header extends Component {
	state = {
		infoheadings: [
		  {title: "Contact Information"},
		  {title: "Investment Properties"},
		  {title: "Hard Money Lenders"}
		],
		showInfoDetails: false
	}

	MoreInfoHandler = () => {
		const doesShow = this.state.showInfoDetails;
		this.setState({showInfoDetails: !doesShow})
	}
	render() {
		return(
				<header className="App-header">
				  <section id="hero1">
				    <Nav />
				    <div className="info">
				      <InfoCard click={this.MoreInfoHandler} title={this.state.infoheadings[0].title}>
				        {this.state.showInfoDetails ? <p>Lenore Smith<br />Cell: 999-999-9999<br />address@address.com</p>: null}
				      </InfoCard>
				      <InfoCard title={this.state.infoheadings[1].title}>
				        {this.state.showInfoDetails ? <p>Search publicly available inventory below.Request access to unlisted properites.<br /><a href="">Send Request</a></p>: null}
				      </InfoCard>
				      <InfoCard title={this.state.infoheadings[2].title}>
				        {this.state.showInfoDetails ? <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas faucibus commodo bibendum. Fusce elit eros.</p>: null}
				      </InfoCard>
				    </div>
				  </section>
				  <section id="hero2">
				    <h1 className="App-title"><span>Welcome. I'm Lenore Smith</span><br />Atlanta's Investment Property Specialist</h1>
				    <h2>Get access to exclusive unlisted properties in Atlanta and surrounding areas</h2>
				  </section>
				</header> 
		);
	}
}

export default Header;