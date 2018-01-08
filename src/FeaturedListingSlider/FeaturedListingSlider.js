import React from 'react';
import './FeaturedListingSlider.css';

const FeaturedListingSlider = () => {
	return(
			<div className="FeaturedSlide">
				<img src="http://via.placeholder.com/370x187" />
				<div>
					<p>123 Peachtree Street, Atlanta, GA<br />
						$325,000</p>
					<p>3 Beds | 2 Baths</p>
				</div>
			</div>
	);
}

export default FeaturedListingSlider;