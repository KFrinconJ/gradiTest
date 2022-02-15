import { Component } from "react";
import axios from "axios";
import Info from "./components/info-section/info";
import Formulario from "./components/form-component/formulario";
import Description from "./components/description-component/description";
import ImageComponent from "./components/image-component/image-c";
import Price from "./components/price-component/price";

let end_point =
	"https://graditest-store.myshopify.com/products/free-trainer-3-mmw.js";
class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			products: [],
		};
	}

	componentDidMount() {
		axios
			.get(end_point)
			.then((response) => {
				this.setState({ products: response.data });
			})
			.catch((error) => {
				console.log(error);
			});
	}

	render() {
		const { products } = this.state;
		return (
			<div className="bg-white">
				<div className="pt-6">
					{products.length !== 0 ? (
						<div>
							<nav aria-label="Breadcrumb">
								<ol className="max-w-2xl mx-auto px-4 flex items-center space-x-2 sm:px-6 lg:max-w-7xl lg:px-8">
									<li>
										<div className="flex items-center">
											<a
												href="#"
												className="mr-2 text-sm font-medium text-gray-900"
											>
												{products.url}
											</a>
										</div>
									</li>
								</ol>
							</nav>
							<main>
								<ImageComponent imgData={products} />
								<div className="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
									<Info infoData={products} />

									<div className="mt-4 lg:mt-0 lg:row-span-3">
										<Price priceData={products} />
										<Formulario formularioData={products.options} />
									</div>
									<Description descriptionData={products.description} />
								</div>
							</main>
						</div>
					) : null}
				</div>
			</div>
		);
	}
}

export default App;
