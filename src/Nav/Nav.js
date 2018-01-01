import React from 'react';
import './Nav.css';

const nav = () => {
	return(
		<div className="Nav">
			<img src="../images/key-logo-wht.png" />
			<ul>
				<li><a href="#">Investors</a></li>
				<li><a href="#">Home Buyers/Sellers</a></li>
				<li><a href="#">About Me</a></li>
				<li className="Login"><a href="#">Log in</a></li>
			</ul>
		</div>
	);
}

export default nav;