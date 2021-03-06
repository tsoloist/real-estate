import React from 'react';
import './Nav.css';
import Logo from '../images/key-logo-wht.png';
import { Link } from 'react-router-dom';
import HomeBuySell from '../HomeBuySell/HomeBuySell';
import Investors from '../Investors/Investors';
import About from '../About/About';
import Login from '../Login/Login';


const nav = () => {
	return(
		<div className="Nav">
			<img src={Logo} />
			<ul>
				<li><Link to="/investors">Investors</Link></li>
				<li><Link to="/homebuysell">Home Buyers/Sellers</Link></li>
				<li><Link to="/about">About Me</Link></li>
				<li className="Login"><Link to="/login">Log in</Link></li>
			</ul>
		</div>
	);
}

export default nav;