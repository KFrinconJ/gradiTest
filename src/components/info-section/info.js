import { Component } from "react";

class Info extends Component {
	render() {
		const { infoData } = this.props;
		return (
			<div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
				<h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
					{infoData.title}
				</h1>
			</div>
		);
	}
}

export default Info;
