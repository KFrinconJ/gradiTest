import { Component } from "react";
import Color from "../color-selector-component/color-c";
import Size from "../size-selector-component/size";
import BtnBuy from "../btn-component/btn";

class Formulario extends Component {
	render() {
		const { formularioData } = this.props;
		return (
			<form className="mt-10">
				<Color colorData={formularioData} />
				<Size SizeOptions={formularioData} />
				<BtnBuy />
			</form>
		);
	}
}

export default Formulario;
