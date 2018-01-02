import React, {Component} from 'react';
import './Header.css';
import InfoCard from './InfoCard/InfoCard.js';
import Nav from './Nav/Nav.js';
import ContactImg from '../images/contact.png';
import LoyaltyImg from '../images/loyalty.png';
import WalletImg from '../images/wallet.png';


const Header = (props) => {
		const contactStyle = {
			backgroundImage: "url(" + ContactImg + ")",
			backgroundRepeat: 'no-repeat',
			backgroundPosition: '3px center',
			backgroundSize: '40px 40px'
		}
		const loyaltyStyle = {
			backgroundImage: "url(" + LoyaltyImg + ")",
			backgroundRepeat: 'no-repeat',
			backgroundPosition: '3px center',
			backgroundSize: '40px 40px'
		}
		const walletStyle = {
			backgroundImage: "url(" + WalletImg + ")",
			backgroundRepeat: 'no-repeat',
			backgroundPosition: '3px center',
			backgroundSize: '40px 40px'
		}
		return (
				<header className="App-header">
				  <section id="hero1">
				    <Nav />
				    <div className="info">
					      <InfoCard style={contactStyle} click={props.click} title="Contact Me">
					        {props.condition ? <p>Lenore Smith<br />Cell: 999-999-9999<br />address@address.com</p>: null}
					      </InfoCard>
					      <InfoCard style={loyaltyStyle} click={props.click} title="Investment Properties">
					        {props.condition ? <p>Search publicly available inventory below.Request access to unlisted properites.<br /><a href="">Send Request</a></p>: null}
					      </InfoCard>
					      <InfoCard style={walletStyle} click={props.click} title="Hard Money Lenders">
					        {props.condition ? <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas faucibus commodo bibendum. Fusce elit eros.</p>: null}
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

export default Header;