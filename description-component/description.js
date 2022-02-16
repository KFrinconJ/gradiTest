import { Component } from "react";
import parse from "html-react-parser";

class Description extends Component {
	render() {
		const { descriptionData } = this.props;

		let data = { descriptionData };

		return (
			<div className="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
				<div>
					<h3 className="sr-only">Description</h3>
					<div className="space-y-6">
						<p className="text-base text-gray-900">
							{parse(data.descriptionData)}
						</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Description;
