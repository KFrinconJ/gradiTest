import { Component } from "react";

class Price extends Component {
	render() {
        const { priceData } = this.props;
		return (
			<div>
				<p className="text-3xl text-gray-900">{priceData.price}</p>
				<p className="text-3xl text-gray-900">
					{priceData.compare_at_price_max}
				</p>
			</div>
		);
	}
}

export default Price;
